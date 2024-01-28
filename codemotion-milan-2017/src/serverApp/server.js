const restify = require('restify');
const WebSocket = require('ws').Server;
const monk = require('monk');

// create connection to DB
const connString = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const db = monk(connString, { username : process.env.DB_USER, password : process.env.DB_PW });

// start the web socket server
const WebSocketServer = new WebSocket({ port: JSON.parse(process.env.W_SOCK_DISPLAY).PORT });

// create the server
const server = restify.createServer();

// configurations
server.pre(restify.plugins.pre.userAgentConnection());
server.use(restify.plugins.bodyParser());

// set up the routes
server.put('/rooms/:id/', (req, res, next) => {

    const room = {
        _id: req.params.id,
        people: req.body.value,
    };

    const roomsCollection = db.get('rooms');

    roomsCollection.findOneAndUpdate(
        { _id: room._id }, { people: room.people, lastUpdate: new Date() }, { castIds: false }).then((newRoom) => {

        const message = JSON.stringify(newRoom);

        WebSocketServer.clients.forEach((client) => {
            client.send(message);
        });

        res.send(newRoom);

        return next();

    }).catch(() => {

        res.end(500);

        return next();
    });

});

server.get('/rooms', (req, res, next) => {

    const roomsCollection = db.get('rooms');

    roomsCollection.find({}).then((rooms) => {

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(rooms));

        return next();

    }).catch(() => {

        res.end(500);

        return next();
    });

});

// to retrieve all static assets
server.get(/.*/, restify.serveStatic({
    directory: 'public',
}));

// start the server
server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST);
