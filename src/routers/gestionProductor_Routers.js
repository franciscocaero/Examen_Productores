import { Router } from "express";
import { crearProductoController,actualizarProductoController,eliminarProductoController,verTodosProductosController,verProductoController, comprarProductoController } from "../controllers/gestionProductor_Controller.js";
import { verifyToken } from "../middlewares/auth.js";


const router = Router()
/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Operaciones relacionadas con productos
 */

/**
/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       required:
 *         - nombre
 *         - precio
 *         - descripcion
 *       properties:
 *         nombre:
 *           type: string
 *         precio:
 *           type: number
 *         descripcion:
 *           type: string 
 */
/**
 * @swagger
 * /v1/nuevos/producto:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags:
 *       - Productos
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precio:
 *                 type: number
 *               descripcion:
 *                 type: string
 *               imagen:
 *                 type: string
 *                 format: binary
 *           example:
 *               nombre: Leche de Vaca
 *               precio: 5
 *               descripcion: Leche buena para los huesos
 *               imagen: Colocar imagen
 *     responses:
 *       '200':
 *         description: Producto creado exitosamente
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/nuevos/producto', verifyToken, crearProductoController);
/**
 * @swagger
 * /v1/todos/producto:
 *   get:
 *     summary: Ver todos los productos
 *     tags:
 *       - Productos
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json::
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precio:
 *                 type: number
 *               descripcion:
 *                 type: string
 *               imagen:
 *                 type: string
 *                 format: binary
 *           example:
 *             producto1:
 *               nombre: Leche de Vaca
 *               precio: 5
 *               descripcion: Leche buena para los huesos
 *               imagen: Colocar imagen
 *             producto2:
 *               nombre: Huevos
 *               precio: 1
 *               descripcion: Para el desayuno
 *               imagen: Colocar imagen 
 *     responses:
 *       '200':
 *         description: Lista de productos
 *       '500':
 *         description: Error interno del servidor
 */



router.get('/todos/productos', verTodosProductosController)
/**
 * @swagger
 * /v1/productos/{id}:
 *   put:
 *     summary: Actualizar un producto por su ID
 *     tags:
 *       - Productos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       '200':
 *         description: Producto actualizado exitosamente
 *       '404':
 *         description: Producto no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
router.put('/productos/:id',verifyToken, actualizarProductoController) // ruta privada
/**
 * @swagger
 * /v1/productos/{id}:
 *   delete:
 *     summary: Eliminar un producto por su ID
 *     tags:
 *       - Productos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Producto eliminado exitosamente
 *       '404':
 *         description: Producto no encontrado
 *       '500':
 *         description: Error interno del servidor
 */

router.delete('/productos/:id',verifyToken, eliminarProductoController) // ruta privada
/**
 * @swagger
 * /v1/productos/comprar/{id}:
 *   post:
 *     summary: Comprar un producto por su ID
 *     tags:
 *       - Productos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Compra realizada exitosamente
 *       '404':
 *         description: Producto no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/productos/comprar/:id',verifyToken, comprarProductoController)

export default router