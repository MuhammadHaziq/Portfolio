# FROM  node:18.17.0-alpine AS builder

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# FROM nginx:alpine

# WORKDIR /usr/share/nginx/html

# # Remove default nginx static files
# RUN rm -rf ./*

# # Copy built Next.js files
# # COPY --from=builder /app/.next /usr/share/nginx/html/.next
# # COPY --from=builder /app/public /usr/share/nginx/html/public
# COPY --from=builder /app/next.config.js ./next.config.js
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# # Fix permissions for Nginx
# RUN chmod -R 755 /usr/share/nginx/html && chown -R nginx:nginx /usr/share/nginx/html

# # Copy the custom Nginx config
# COPY ./nginx.conf /etc/nginx/nginx.conf

# # Expose the correct port
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]

# COPY --from=builder /app/next.config.js ./next.config.js
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json


FROM node:18.17.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18.17.0-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 80

# Forward port 80 to your app's port, if needed
ENV PORT=80
CMD ["npm", "start"]
