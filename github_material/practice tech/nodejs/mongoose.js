const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cats', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{console.log("connected sucessfully!");})
.catch(()=>{console.log("failed to connect");})

// connected to database cats

// 1. define a schema 
const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    type: String,

});
// 2. add method in schema before model
catSchema.methods.speak = function () {
    console.log(`meow! my name is ${this.name}`);
};

// 3. now define a Model(i.e a class) based on this schema -- it will create "cats" collection
const cat = mongoose.model('cat', catSchema);

// 4. now create cats(i.e documents)

const jake = new cat({
    name: "jake",
    age: 4,
    type: "jangli"
});

const bake = new cat({
    name: "bake",
    age: 2,
    type: "kali"
});
jake.speak();
bake.speak();
