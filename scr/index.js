import express from "express";
import cors from "cors";

//importamos la configuracion de la base de datos

import BD from '../config/db.js';

//importamos las rutas
import citasRoutes from '../routes/Routes_Citas.js';


// definimos la variable para trabajar en express
const app = express();

app.use(cors());
app.use(express.json());
app.use('/citas', citasRoutes);

//autenticacion

try {
    await BD.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }



// mensaje para el navegador
app.get('/', (req,res) =>{
    res.send("Hola mundo");
});



app.listen(5000, () =>{
    console.log ("El servidor esta ejecutandose en http://localhost:5000/");
})