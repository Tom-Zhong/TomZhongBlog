# Tom Zhong's Site

> Through the Nuxt.js, I build my personal site &#34;Tom Zhong&#39;s Site&#34;.If you have any advice, please feel free to contract me.

## Local Development
>> Please make sure you have installed Node.js and using Docker to run mongodb-server first.

``` bash
$ docker pull mongodb/mongodb-community-server:latest
$ docker run -d -p 27017:27017 mongodb/mongodb-community-server:latest #ensure your mongodb is running
$ docker ps
$ npm install
$ npm run dev
```

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Run with Docker
>> Please make sure you have installed Docker.

``` bash
docker-compose up # it will create two containers, one for frontend and one for backend.
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
