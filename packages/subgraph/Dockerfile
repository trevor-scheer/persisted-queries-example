FROM node:22

# Create app directory
WORKDIR /usr/src/app

# Copy package file and source code
COPY packages/subgraph ./

# Install app dependencies
RUN npm install

EXPOSE 4001

CMD [ "node", "index.js" ]