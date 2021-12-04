FROM node:16.13-alpine3.13 as stageBuild

ADD package*.json /tmp

RUN cd /tmp && npm install

RUN mkdir /app && cp -a /tmp/node_modules /app

WORKDIR /app

ADD . .

RUN npm run build

FROM node:16.13-alpine3.13 

WORKDIR /app

COPY --from=stageBuild /app/node_modules ./node_modules
COPY --from=stageBuild /app/dist ./dist
COPY package.json .
COPY env.yaml .

CMD ["npm", "run", "serve"]