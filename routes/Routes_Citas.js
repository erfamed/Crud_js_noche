// importar express

import express from 'express';


//importamos nuestro controlador o controllers
import { agregarCitas, eliminarCita, getCita, modificarCita, todaslascitas } from '../controllers/CitasController.js';
const router = express.Router();

router.post('/', agregarCitas);
router.get('/',todaslascitas);
router.get('/:id', getCita);
router.put('/:id', modificarCita);
router.delete('/:id', eliminarCita);

export default router;