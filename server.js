const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const cors = require('cors');
const server = require('http').Server(app);

app.use(cors());
app.use(express.static('./src'));

app.get('/*', function (req, res){
    res.sendFile(path.join(__dirname, './src/index.html'));
    console.log('path', path.join(__dirname, 'src', 'index.html'))
});

server.listen(port, function() {
    console.log("App running on port " + port);
})
