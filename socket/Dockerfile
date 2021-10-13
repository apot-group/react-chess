FROM node:14

WORKDIR /app

COPY ["./app/package.json", "./app/package-lock.json*", "./"]

RUN npm install --production

COPY ./app/ /app/

EXPOSE 3001

