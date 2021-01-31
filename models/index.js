
const Category = require('./categories')
const Product = require('./products')

Product.hasMany(Category,{as:'Cproduct'})







module.exports = {Category,Product};










