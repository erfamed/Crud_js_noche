//importamos la configuracion de la base de datos

import BD from "../config/db.js";
import { DataTypes } from "sequelize";



const Citas = BD.define('citas', {
    nombre_medico:
    {
        type:DataTypes.STRING,
        allowNull:false
    },

    especialidad:
    {
        type:DataTypes.STRING,
        allowNull:false
    },

    fecha:
    {
        type:DataTypes.STRING,
        allowNull:false
    },

    duracion:
    {
        type:DataTypes.STRING,
        allowNull:false
    }


});

export default Citas;