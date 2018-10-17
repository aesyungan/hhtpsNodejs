var express = require('express');
const https = require('https');
const fs = require('fs');

const options = {
    pfx: fs.readFileSync('mycert.p12'),
    passphrase: '12345678'
};
app = express()

app.get('/', function(req,res) {
    res.send('hello');
});
var server = https.createServer(options, app);

server.listen(3000, function(){
    console.log("server running at https://IP_ADDRESS:3000/")
});