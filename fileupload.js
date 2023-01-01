var express=require('express');
var multer=require('multer');
var app=express();
var storage=multer.diskStorage({
    destination:function (req,file,callback) {
        callback(null,'./uploads');
    },
    filename:function (req,file,callback) {
        callback(null,file.originalname);
    }
})
var upload=multer({storage:storage}).single('myfile');
app.post('/vala',function (req,res) {
    upload(req,res,function (error) {
        if(error){
            res.send('file cant upload')
        }else{
            res.send('file upload successful')
        }
    })
})
app.listen(6000,function () {
    console.log('server run successful')
})