import { Router, request } from "express";
import { borrarUsuarioController, loginUsuarioController, registroUsuarioController, verUsuarioController } from "../controllers/usuarios_Controller.js";
import { verifyAdminToken, verifyToken } from "../middlewares/auth.js";

const router = Router()
/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Operaciones relacionadas con usuarios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - email
 *       properties:
 *         username:
 *           type: string
 *         password:
 *           type: string
 *         email:
 *           type: string
 *       example:
 *          username: saul
 *          password: 12345
 *          email: saulnike111@gmail.com
 */

/**
 * @swagger
 * /v1/usuarios/registro:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       '200':
 *         description: Usuario registrado exitosamente
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/usuarios/registro', registroUsuarioController)
/**
 * @swagger
 * /v1/usuarios/login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *           example:
 *               value:
 *                 username: Saul
 *                 password: 12345   
 *     responses:
 *       '200':
 *         description: Usuario autenticado correctamente
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/usuarios/login',loginUsuarioController)

// administrador

/**
 * @swagger
 * /v1/usuarios/borrar/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: ID del usuario a eliminar
 *     responses:
 *       '200':
 *         description: Usuario eliminado correctamente
 *       '404':
 *         description: Usuario no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
router.delete('/usuarios/borrar/:id',verifyAdminToken, borrarUsuarioController)
/**
 * @swagger
 * /v1/usuarios/ver/{id}:
 *   get:
 *     summary: Obtener información de un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: ID del usuario a consultar
 *     responses:
 *       '200':
 *         description: Información del usuario obtenida correctamente
 *       '404':
 *         description: Usuario no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
router.get('/usuarios/ver/:id', verifyAdminToken, verUsuarioController)



export default router