const express = require('express');
const mongoose = require('mongoose');
const Event = require('./mongoose_schema/events');
const url = "xyz"

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Yeah! mongoose connected"))
.catch(e => console.log(e));
const app = express(); 

app.use('/', (req, res) => res.send("<h1>hello there</h1>"))

app.listen('3000', () => console.log("listening on port 3000"))
