Codemotion Milan 2017
=====================

> **Combining React and WebSocket to build real time web application: a case study**

> Nowadays, applications need to be more and more dynamic, interactive and fast, so much so as to allow content and information to be updated in real time.

> During this talk, we will see a real example of how to create such a production-ready application, based on a use-case answering this need for interactivity and usability, and using some of the most known technologies the market has to offer, such as React, Flux, WebSocket and MongoDB.


## In short

- [Node.js]
- [ES6] - [React] and [Flux]
- [WebSocket]
- [MongoDB]


## Getting Started

### Prerequisites

- Node `6.10.3`
- nginx `1.12.0`, after installation replace the nginx.conf with the nginx.conf file present in the project root


#### Import/Export seeds to DB

```sh
# start the DB server
`mongod`

# import all file inside the folder `db/seeds/`
mongorestore --db [DB_NAME] /db/seeds/rooms.bson

# Export all file from db
mongodump --db [DB_NAME]

```


### Environment configurations

Files `configs/config-development.json` and `configs/config-production.json` are just examples.
You need to clone one of them and rename it to `configs/config.json`.

Inside this file it's possible configure the following environment variables:

* `SERVER_HOST`     The server host like `127.0.0.1`.
* `SERVER_PORT`     The server port, usually `8080`.

* `W_SOCK_DISPLAY`
    * `SUB_PTH`     Subpath used for initialize a web socket, should be the same configured into `nginx.conf` file.
    * `PORT`        Port used for initialize a web socket, should be the same configured into `nginx.conf` file.

* `DB_USER`         The DB user for credentials authentication.
* `DB_PW`           The DB password for credentials authentication.
* `DB_HOST`         The DB host like `127.0.0.1`.
* `DB_PORT`         The DB port, usually `27017`.
* `DB_NAME`         The DB name, for example `codemotion2017`.

* `http_proxy`      HTTP proxy address like `http://[HOST]:[PORT]/`.
* `https_proxy`     HTTPS proxy address like `https://[HOST]:[PORT]/`.

* `minify`          Flag for minify files during the build process (`true` or `false`).
* `source_map`      Flag for generate source_map files during the build process (`true` or `false`).


### Install all global libraries

To install global libraries by npm, you must first download and install [Node.js] - which includes npm.

Then, using the command line:

```sh
# install `grunt-cli` globally
npm install -g grunt-cli

# install `pm2` globally
npm install pm2 -g

# navigate to the root of your project, then run
npm install

npm run build
npm start

# http://127.0.0.1:8080
```


### Available tasks

* `npm test`        A linter tool for identifying and reporting on patterns in JavaScript.
* `grunt`           Alias for "build" and "watch".

* `npm run build`   Run "test" and compile "javascripts" and "stylesheets".
* `npm start`       Run mp2 production process manager on http://127.0.0.1:8080.

* `npm stop`        Stop all pm2 process    

### Web Service

* `/rooms/:id`      Web Service URL. Replace `:id` with `1|2|3|4|5`. 
                    Use the example present in the file `Codemotion_2017.postman_collection.json`. 


[Node.js]: <https://nodejs.org/it/>
[ES6]: <http://es6-features.org/>
[React]: <https://reactjs.org/>
[Flux]: <https://facebook.github.io/flux/>
[WebSocket]: <https://developer.mozilla.org/it/docs/WebSockets>
[MongoDB]: <https://www.mongodb.com/>
