//Importaciones 
import express from "express";
import dotenv from "dotenv";
import productsRouter from "./routes/products.js"
import shoppingCartRouter from "./routes/shoppingcart.js";


//Configuración de dotenv
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/', productsRouter)
app.use('/', shoppingCartRouter)
app.all('*', (req, res) => {
    res.status(404).json({description: "Route is not implemented"})
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})