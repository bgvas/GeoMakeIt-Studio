const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static('./dist/geo-make-it-studio'));

app.get('/*', function (req, res){
    res.sendFile(path.join(__dirname, './dist/geo-make-it-studio/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
