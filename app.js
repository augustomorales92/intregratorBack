const express = require('express')
const morgan = require('morgan')
const port = 3000
const models = require("./models")
const routes = require('./routes')
const db = require('./db')

var app = express();
producto = [
    { name: "desodorante",
     price: "$20", 
     available: false },
    {
      name: "papel",
      price: "$10",
      available: true,
    },
  ];


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('tiny'))
app.use(routes);


 
 
 app.get("/hardcode",(req,res)=>{
   
    producto.findAll().
    then(hola =>{
        res.send(hola)
    })

    
 })





app.use((err,req,res,next)=>{
    res.sendStatus(404).send(err)

}
)

db.sync()
.then(() => {
  app.listen(port, () => {
    console.log(`linsten on port${port}`);
  });
});



