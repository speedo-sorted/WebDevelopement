const express= require('express');

const app=express();

/*
-- to set path where to find views directory if it is not present in current directory

const path = require ('path');
app.set('views',path.join(__dirname,'/views'));

*/

// app.set('view engine', 'ejs');        // look for ejs files

const port=3000;

// tells that my server is working
//app.use(()=>{console.log("a request is being made")});

app.listen(port,()=>{console.log(`Sucess!! listening at port ${port} in the directory: `,__dirname)});

app.get('/', (req,res)=>{
    fetch("https://maps.googleapis.com/maps/api/geocode/json", {address: "Noida"}).then(res => res.json()).then(data => {console.log(data); res.send(data)})
});
