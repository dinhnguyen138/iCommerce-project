'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  name: String,
  categories: [String],
  description: String,
  rating: Number,
  originalPrice: Number,
  currentPrice: Number,
  brand: String,
  seller: String
}, {
  timestamps: true
})

module.exports = mongoose.model('products', schema)
