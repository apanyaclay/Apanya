import express from "express";
import {
  listProducts,
  getProduct,
  editProduct,
  addProduct,
  deleteProduct,
} from "../controllers/products.controllers.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *     Product:
 *      type: object
 *      properties:
 *          id:
 *              type: integer
 *              description: Product id
 *          name:
 *              type: string
 *              description: Product name
 *          age:
 *              type: integer
 *              description: Product age
 *          type:
 *              type: string
 *              description: Product type
 *          breed:
 *              type: string
 *              description: Product breed
 *     example:
 *          id: 1
 *          name: Rexaurus
 *          age: 3
 *          breed: labrador
 *          type: dog
 */

/**
 * @swagger
 * /Products:
 *  get:
 *     summary: Get all Products
 *     description: Get all Products
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */
router.get("/", listProducts);

/**
 * @swagger
 * /Products/{id}:
 *  get:
 *     summary: Get Product detail
 *     description: Get Product detail
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Product id
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */
router.get("/:id", getProduct);

/**
 * @swagger
 * /Products/{id}:
 *  put:
 *     summary: Edit Product
 *     description: Edit Product
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Product id
 *     requestBody:
 *       description: A JSON object containing Product information
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/Product'
 *           example:
 *              name: Rexaurus
 *              age: 12
 *              breed: labrador
 *              type: dog
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 *
 */
router.put("/:id", editProduct);

/**
 * @swagger
 * /Products:
 *  post:
 *      summary: Add Product
 *      description: Add Product
 *      requestBody:
 *          description: A JSON object containing Product information
 *          content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/Product'
 *                 example:
 *                    name: Rexaurus
 *                    age: 12
 *                    breed: labrador
 *                    type: dog
 *      responses:
 *      200:
 *          description: Success
 *      500:
 *          description: Internal Server Error
 */
router.post("/", addProduct);

/**
 * @swagger
 * /Products/{id}:
 *  delete:
 *     summary: Delete Product
 *     description: Delete Product
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Product id
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 */
router.delete("/:id", deleteProduct);

export default router;