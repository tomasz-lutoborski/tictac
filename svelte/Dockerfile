FROM node:16-alpine

WORKDIR /usr/src/app

COPY vite.config.ts ./
COPY package*.json ./

RUN npm install

COPY ./src ./src
COPY ./static ./static

RUN npm run-script build

EXPOSE 5000

ENV HOST=0.0.0.0

CMD [ "npm", "run", "dev", "--host"]
