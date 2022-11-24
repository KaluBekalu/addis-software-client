FROM node:latest

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY . .

EXPOSE 5173

CMD [ "yarn","dev" ]