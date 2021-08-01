FROM node:14-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN node node_modules/.bin/tsc
RUN node node_modules/.bin/grunt
EXPOSE 9091
WORKDIR /app/dist
CMD ["node", "./index.js"]
