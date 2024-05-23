# Build stage
FROM node:18.19.0 AS build

WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn 

COPY . /app

RUN yarn build

FROM nginx:alpine

# Copy config nginx
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/nginx/.htpasswd /etc/nginx/conf.d/.htpasswd

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build /app/.next .

ENTRYPOINT ["nginx", "-g", "daemon off;"]