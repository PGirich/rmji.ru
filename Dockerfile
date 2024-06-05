# build stage
FROM node:lts-alpine as build
WORKDIR /app
RUN npm install -g @angular/cli@18
COPY package*.json ./
RUN npm install
COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]

# production stage
FROM node:lts-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]