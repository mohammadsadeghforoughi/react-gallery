FROM node:14.17.3-alpine AS builder


WORKDIR /app-temp

RUN npm cache clean --force  

RUN npm cache verify  


COPY package.json yarn.lock .
 

RUN yarn install --frozen-lockfile 


COPY . .

RUN yarn test

RUN yarn build



FROM nginx:alpine


WORKDIR /app

RUN rm -rf *

COPY nginx.conf /etc/nginx


COPY --from=builder /app-temp/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
 