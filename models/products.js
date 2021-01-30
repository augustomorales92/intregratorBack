const S = require("sequelize");
const db = require("../db");
const Page = require("../../10-Wiki/models/Page");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING
    },
    price: {
      type: S.INTEGER
    },
    description: {
      type: S.STRING
    },
    available: {
      type: S.BOOLEAN,
      defaultValue: true
    },
    stock: {
      type: S.INTEGER
     
    },
  },
{
    sequelize: db,
    modelname: "product",
  }
);

Product.findStock = ()=>{
return  Product.findAll(
   {
     where:{
      available : false
     }
   }
 )
}





module.exports = Product;
