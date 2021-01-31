const S = require("sequelize");
const db = require("../db");
const Op = S.Op

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
      
    },
    stock: {
      type: S.INTEGER,
      defaultValue : 0,
      set(stock){
        this.setDataValue('available', (stock>0 ? true : false));
        this.setDataValue('stock', stock);
       
      }
     
    },
    priceGetter:{
      type : S.VIRTUAL,
      get(){
        return `$${this.price}`
      }
    },
  },
{
    sequelize: db,
    modelname: "product",
  }
);

Product.findStock = ()=>{
return Product.findAll(
   {
     where:{
      [Op.or]:[{available : false},{stock:0}]
     }
   }
 )
}



Product.beforeCreate((product, options) => {
 
    
    if (product.available == false) {
       product.name = `${product.name} isn't available`;
     }
     console.log(product.name);
   });

   Product.prototype.earning = function() {
    return this.stock * this.price
   };



  


module.exports = Product;
