# FROM node:lts-alpine AS builder

# WORKDIR /app

# COPY /package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# ############################################################################
#     # Coply build Data in NGINX Server for Production Level
# ############################################################################

# FROM nginx:latest

# WORKDIR /usr/share/nginx/html

# COPY --from=builder /app/.next .
# COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# Stage 1: Build Next.js app
FROM node:lts-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV NODE_ENV=production

RUN npm run build

# Stage 2: Final image with NGINX + Node.js for SSR
FROM node:lts-alpine

# Install NGINX and other dependencies
RUN apk add --no-cache nginx bash curl

# Create app directories
WORKDIR /app

# Copy built app from builder
COPY --from=builder /app /app

# Copy NGINX config
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy custom start script to run both Node.js and NGINX
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Logs directories for NGINX
RUN mkdir -p /run/nginx /var/log/nginx && \
    touch /var/log/nginx/access.log /var/log/nginx/error.log

ENV NODE_ENV production

EXPOSE 80

CMD ["/start.sh"]
