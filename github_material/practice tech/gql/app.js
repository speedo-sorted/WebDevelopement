const express = require('express');
const mongoose = require('mongoose');
const Event = require('./mongoose_schema/events');
<<<<<<< HEAD
const url = "mongodb://localhost:27017/gql";
=======
const url = "xyz"
>>>>>>> 4bd11495d3811ce2a3019744a99601213d1e8bfd

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Yeah! mongoose connected"))
.catch(e => console.log(e));
const app = express(); 

app.use('/', (req, res) => res.send("<h1>hello there</h1>"))

app.listen('3000', () => console.log("listening on port 3000"))
