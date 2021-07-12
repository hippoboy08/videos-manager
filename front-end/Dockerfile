# Pull docker image
FROM node:16-alpine3.11 as builder

# set working directory
WORKDIR /app/front-end

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/front-end/node_modules/.bin:$PATH

# install application dependencies
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install

# To Fix Permissions for Packages
RUN mkdir -p ./node_modules/.cache && chmod -R 777 ./node_modules/.cache

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]