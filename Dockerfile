# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build-only

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ../src/assets /usr/share/nginx/html/src/assets
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]