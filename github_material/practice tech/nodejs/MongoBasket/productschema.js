const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: { type: String, required: true},
    
    quantity: {
        type: Number, required: true,
        min: [0, "you can't buy negetive qty"] 
    },
    type: {type: String, required: true}
  });
