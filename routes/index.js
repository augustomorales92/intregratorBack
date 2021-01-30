const express = require('express')
const router = express.Router();
const {Product,Category} = require('../models')



router.get("/products",(req,res)=>{
     product.findAll().
     then(hola =>{
         res.send(hola)
     })

})

router.get("/products/:id",(req,res)=>{
    let id = req.params.id
    res.send("i'm inside of the page");

})

router.post("/products",(req,res)=>{
    res.send("i'm inside of the page");

})

router.put("/products/:id",(req,res)=>{
    let id = req.params.id
    res.send("i'm inside of the page");

})
router.delete("/products/:id",(req,res)=>{
    let id = req.params.id
    res.send("i'm inside of the page");

})





module.exports = router;