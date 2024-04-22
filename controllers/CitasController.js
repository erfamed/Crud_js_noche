//importamos el modelo

import Citas from "../models/Citas.js";


//metodos crud

//crear una funcion agregar nueva cita

export const agregarCitas = async(req, res) =>{
    try {
        await Citas.create(req.body);  //este codigo crea la nueva cita
        res.json({msg: "Cita creada Correctamente"});
    } catch (error) {
        res.json({msg: error.message}); 
    }
}

//funcion mostrar todas las citas

export const todaslascitas = async(req,res) =>{

    try {
        const citas = await Citas.findAll();
        res.json(citas);
    } catch (error) {
        res.json({msg:error.message});
    }
}

//crear una funcion para obtener una cita o un registro por id en MySql

export const getCita = async(req,res) => {
    try {
        const cita = await Citas.findAll({
            where:{id:req.params.id}
        });
        res.json(cita[0]);
    } catch (error) {
        res.json({msg:error.message});
    }
}


// funion para modificar una cita o un registro de MySql
export const modificarCita = async(req,res) => {
    try {
        await Citas.update(req.body, {
            where:{id: req.params.id}
        });
        res.json({msg:"se modifico la cita"});

    } catch (error) {
        res.json({msg:error.message});
    }
}

// funcion para elimninar un registro de MySql

export const eliminarCita = async(req,res) => {
    try {
       let citas = await Citas.findAll({where:{id:req.params.id}});
       if(!citas[0]){
        res.json({msg:"No se encuentra cita para eliminar"});
       }
       await citas[0].destroy();
       res.json({msg:"se elimino la cita"}) 

    } catch (error) {
        res.json({msg:error.message});
    }
}
