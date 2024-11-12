import express from 'express'
import { createEmpleado, deleteEmpleado, getAllEmpleados, getEmpleado, updateEmpleado } from '../controllers/EmpleadoController.js'
const router = express.Router()

// router.get('/', getAllEmpleados): Hace referencia a la ruta raíz
router.get('/', getAllEmpleados)
router.get('/: id', getEmpleado)
router.post('/', createEmpleado)
router.put('/: id', updateEmpleado)
router.delete('/: id', deleteEmpleado)

export default router