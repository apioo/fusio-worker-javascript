FROM node:14-alpine
WORKDIR /worker
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN node node_modules/.bin/tsc
RUN node node_modules/.bin/grunt
RUN mv /worker/dist/src/*.js /worker/src
RUN mv /worker/dist/index.js /worker/index.js
EXPOSE 9091
VOLUME /worker/actions
CMD ["node", "./index.js"]
