const mongoose = require('mongoose')
//person schema
let personSchema = new mongoose.Schema({
    name: {
        type: String,
         required: true
        },
    age: Number,
    favFoods: [String]  
  })
//person model
  module.exports = mongoose.model('Person', personSchema)
  