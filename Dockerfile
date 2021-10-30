# Dockerfile

# base image
FROM node:14-alpine

# create & set working directory
WORKDIR /usr/src

# copy source files
COPY . .
# install dependencies
RUN npm install

RUN npm run build

# start app
EXPOSE 3000