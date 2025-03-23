FROM node:lts-alpine AS builder

WORKDIR /app

COPY  package.json  ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80