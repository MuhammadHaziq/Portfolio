FROM node:lts-alpine AS builder

WORKDIR /app

COPY  package.json  ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

# Copy necessary files from builder stage
COPY --from=builder /app/package.json /app/package-lock.json* ./
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY --from=builder /app/node_modules /app/node_modules

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080

# Expose the correct port
EXPOSE 80

# Start the Next.js app with the correct port
# CMD ["npx", "next", "start", "-p", "8080"]