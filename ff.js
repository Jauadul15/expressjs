var express=require('express');
var bodyParser=require('body-parser');
var multer=require('multer');

var app=express();
var multer=multer();
app.use(bodyParser.json());
app.use(multer.array());
app.use(express.static('public'));
app.post('/kala',function (req,res) {
    let reqbody=req.body;
    res.send(JSON.stringify(reqbody));
})

app.listen(5099,function () {
    console.log('server run successful')
})