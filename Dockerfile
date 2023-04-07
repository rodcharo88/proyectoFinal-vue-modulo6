#Docker File del FRONT VueJs
FROM node:14.17.0-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app/
RUN npm run build --prod

FROM nginx:1.22.1

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /app/dist /usr/share/nginx/html

EXPOSE 4200:80
CMD ["nginx", "-g", "daemon off;"]
