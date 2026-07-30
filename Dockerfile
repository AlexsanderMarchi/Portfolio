FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM busybox:1.36-uclibc AS runtime
WORKDIR /www
COPY --from=build /app/dist ./
EXPOSE 8080
CMD ["busybox", "httpd", "-f", "-v", "-p", "8080", "-h", "/www"]
