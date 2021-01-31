const express = require('express')
const Product = require('../models/products')
const Category = require('../models/categories')
const router = express.Router()
const S = require("sequelize");
const Op = S.Op


// GET PARA ENCONTRAR SEGUN STOCK DISPONIBLE
router.get("/stock",(req,res)=>{
  Product.findStock()
  .then(product=>{
      res.json(product.length)
  })
     })


//GET DE ARRANQUE PARA ENCONTRAR TODOS LOS PRODUCTOS
     router.get("/",(req,res)=>{
  
        Product.findAll()
        .then(product=>{
            res.send(product)
        })
           })

//GET DE ARRANQUE PARA ENCONTRAR TODOS LOS PRODUCTOS
     router.get("/", (req, res) => {
       Product.findAll()
       .then((product) => {
         res.send(product);
       });
     });

//GET DE ARRANQUE PARA ENCONTRAR TODOS LOS PRODUCTOS
     router.get("/earning/:name", (req, res,next) => {
       let nombre = req.params.name;
       return Product.findOne({
         where: {
           [Op.and]: [{ name: nombre }, { available: true }],
         },
       }).then((prod) => {
         res.json( prod.earning());
       })
       .catch(next)
    
     });

//GET PARA ENCONTRAR LOS PRODUCTOS SEGUN SU ID
router.get("/:id",(req,res,next)=>{
    let id = req.params.id
    Product.findByPk(id)
    .then(product=>{
        res.send(product)
    })
    .catch(next)

})

//POST PARA CREAR NUEVOS PRODUCTOS
router.post("/",(req,res,next)=>{
    Product.create(req.body)
      .then(product => {
        return res.send(product)
      })
      .catch(next);
    

})

//POST PARA CREAR NUEVA CATEGORIA
router.post("/category",(req,res,next)=>{
    Category.create(req.body)
      .then(product => {
        return res.send(product)
      })
      .catch(next);
    

})

//PUT PARA EDITAR LOS PRODUCTOS
router.put("/:id",(req,res,next)=>{
    let id = req.params.id
    Product.update(req.body,{
        where: {
        id: id,
      }
    })
    
    .then(() => {
        return res.send("changed")
    })
    .catch(next)

})

//DELETE PARA ELIMINAR LOS PRODUCTOS
router.delete("/:id",(req,res)=>{
    let id = req.params.id
    Product.destroy({
        where: {
        id: id,
      }
    })
    
    .then(() => {
        return res.send("destroyed")
    })
    .catch(next)

})





module.exports = router;