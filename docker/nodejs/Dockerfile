FROM node:16.13-alpine3.13

ADD package*.json /tmp

RUN cd /tmp && npm install

RUN mkdir /app && cp -a /tmp/node_modules /app

WORKDIR /app

ADD . .

CMD ["npm", "run", "start"]