FROM node:8-jessie

# install build dependencies
RUN apt-get update && \
    apt-get install -y autoconf libtool pkg-config nasm build-essential

ADD . /app/
WORKDIR /app/

# run npm install
RUN npm install -g gatsby-cli && \
    npm install

EXPOSE 8001
CMD ["gatsby", "develop", "-H", "0.0.0.0", "-p", "8001"]
