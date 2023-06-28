FROM node:slim

WORKDIR /app

COPY package*.json ./

RUN npm -g install npm@latest
RUN npm install 


COPY . .
CMD ["node", "index.js"]
