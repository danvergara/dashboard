FROM node:12.5.0-alpine as builder

WORKDIR /app

# add /app/node_modules/.bin/ to PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install --silent

COPY . /app

RUN npm run build

# Production environment
FROM nginx

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
