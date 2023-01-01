var express=require('express');
var bodyParser=require('body-parser')
var multer=require('multer');
var multer=multer();
var app=express();



app.use(bodyParser.json());
app.use(multer.array());
app.use(express.static('public'))
app.get('/',function (req,res) {
    res.send('hello')
})
app.get('/contact',function (req,res) {
    res.send('contact page')
})
app.get('/terms',function (req,res) {
    res.status(403).end("unauthorized")
})
app.get('/info',function (req,res) {
    let myjson=[
        {
            name:"jauad",
            city:'ctg',
            occupation:'engr.'
        },
        {

            name:'rakib',
            city:'dhaka',
            occupation:'doctor'
        }
    ]
    res.json(myjson);
})
app.get('/haha',function (req,res) {
    res.download('./uploads/SampleJPGImage_200kbmb.jpg')
})
app.get('/ma',function (req,res) {
    res.redirect('http://localhost:5055/haha')
})
app.get('/chaa',function (req,res) {
    res.append('name','jauad')
    res.append('city','dhaka')
    res.status(201).end('hello ')
})
app.get('/new',function (req,res) {
    res.cookie('name','jauad')
    res.cookie('city','dhaka')
    res.status(201).end('cookie set successful')

})
app.get('/news',function (req,res) {
    res.clearCookie('name')
    res.status(201).end('cookie clear successful')

})
app.get('/house',function (req,res) {
    res.status(201).end('this is simple get request')

})
app.get('/query',function (req,res) {
   let firstname=req.query.firstname;
   let lastname=req.query.lastname;
   res.end(firstname+' '+lastname)
})
app.get('/url',function (req,res) {
    let Connection=req.header('Connection');
    let lastname=req.query.lastname;
    res.end(Connection);
})


//post request
app.post('/jhaka',function (req,res) {
    res.end('this is a simple post request')
})
app.post('/dhamaka',function (req,res) {
    let firstname=req.query.firstname;
    let lastname=req.query.lastname;
    res.end(firstname+' '+lastname);
})
app.post('/hi',function (req,res) {
    let username=req.header('username')
    let password=req.header('password');
    res.end('username:' +username  +' password: '+password);
})
app.post('/lala',function (req,res) {
    let jsondata=req.body;
    let jsonstring=JSON.stringify(jsondata);
    res.send(jsonstring);
})
app.post('/malaa',function (req,res) {
    let jsondata=req.body;
    let name=jsondata['name']
    res.send(name);
})

app.post('/fala',function (req,res) {
    let reqBody=req.body;
    res.send(JSON.stringify(reqBody));
})

app.listen(5055,function (){
    console.log('done');
})
// var express=require('express');
//
// app=express();
//
// app.get('/',function (req, res) {
//     res.send('hello')
// })
//
// app.listen(8000,function () {
//     console.log('surver run successful');
// })
//
