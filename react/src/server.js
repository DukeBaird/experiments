
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();

const COMMENTS_FILE = path.join(__dirname, '../comments.json');

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/comments', (req, res) => {
    fs.readFile(COMMENTS_FILE, (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});

app.post('/api/comments', (req, res) => {
    fs.readFile(COMMENTS_FILE, (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        
        var comments = JSON.parse(data);

        var newComment = {
            id: Date.now(),
            author: req.body.author,
            text: req.body.text,
        };
        comments.push(newComment);
        fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json(comments);
        });
    });
});

app.listen(app.get('port'), () => {
    console.log('Server running on localhost:' + app.get('port') + '/');
});