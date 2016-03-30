
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
const app = express();

function start() {

    app.set('port', (process.env.PORT || 8080));
    app.use(express.static(__dirname + '/public'));
    app.use(bodyParser.json());

    app.listen(app.get('port'), () => {
        console.log('Server running on localhost:' + app.get('port') + '/');
    });
}

start();