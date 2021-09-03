const express = require('express');
const mongoose = require('mongoose');
const productSchema = require('./productschema.js');
const app = express();

mongoose.connect('mongodb://localhost:27017/product', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Yeah! mongoose connected"))
.catch("Error in mongoose connection");

const port = 3000;

app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Success! connected at port ${port}`)
})

const product = mongoose.model('product',productSchema);

app.get('/products', async (req, res) => {
  let products = await product.find({});
  console.log(products);
  res.render('products/products', {products}); 
})

app.get('/product/new', (req, res) => {
  res.render('products/newproduct');

})
app.get('/product/:id', (req, res) => {
  let id = req.params;
  
})
app.post('/product/new', async (req, res) => {
  let gotProduct = new product (req.body);
  gotProduct.save();
  console.log(gotProduct);
  res.redirect('/products');

})

// const spoon = new product({
//   name: "spoon",
//   quantity: 5, 
//   type: "utensil"
// });
// spoon.save();
// console.log(`saved ${spoon}`);
