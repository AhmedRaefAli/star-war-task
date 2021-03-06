FROM node:13-alpine

ENV MONGO_DB_USERNAME=AhmedRaef \
    MONGO_DB_PWD=AhmedRaef

RUN mkdir -p /home/app

COPY ./app /home/app

WORKDIR /home/app

RUN npm install

CMD ["node", "app.js"]

