# Delete node_modules folder is exists in your local env
# To run on development mode use docker build -f dev.Dockerfile .
# After build image run docker run IMAGE_ID this is the builded image for your env
FROM node:10.19.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm set strict-ssl false
RUN npm install
COPY . .
CMD ["npm", "start"]
