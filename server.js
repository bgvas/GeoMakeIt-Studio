const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static('./src'));

app.get('/*', function (req, res){
    res.sendFile(path.join(__dirname, './src/index.html'));
    console.log('path', path.join(__dirname, './src/index.html'))
});

app.listen(process.env.PORT || 8080);
