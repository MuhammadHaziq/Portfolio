#!/bin/bash


# Start NGINX in the background
nginx -g "daemon off;" &

# Wait a moment for NGINX to boot
sleep 1

# Start Next.js app
npm start
