import express from 'express'
import { createInventario, deleteInventario, getAllInventarios, getInventario, updateInventario } from '../controllers/InventarioController.js'
const router = express.Router()

// router.get('/', getAllInventarios): Hace referencia a la ruta raíz
router.get('/', getAllInventarios)
router.get('/:id', getInventario)
router.post('/', createInventario)
router.put('/:id', updateInventario)
router.delete('/:id', deleteInventario)

export default router