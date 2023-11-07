// import { getItem, listItems, editItem, addItem, deleteItem } from '../models/products.models.js'
// const productsModels = require('../models/products.models');
import productsModels from '../models/products.models.js';

export const getProduct = (req, res) => {
    try {
        // const resp = productsModels.getItem(parseInt(req.params.id))
        // res.status(200).json(resp)

        const productId = req.params.id;
        productsModels.getItem(productId, (product) => {
            if (!product) {
                res.status(404).json({"message": "Product "+productId+" not found"})
            }
            res.json(product);
        });

    } catch (err) {
        res.status(500).send(err)
    }
}

export const listProducts = (req, res) => {
    try {

        productsModels.listItems((products) => {
            res.json(products);
        });

        // const resp = productsModels.listItems()
        // res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const editProduct = (req, res) => {
    try {

        const productId = req.params.id;
        const product = req.body;
        productsModels.editItem(productId, product, (affectedRows) => {
            res.json({ affectedRows, message: 'Product updated successfully' });
        });

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addProduct = (req, res) => {
    try {
        // const resp = productsModels.addItem(req.body)
        // res.status(200).json(resp)
        const product = req.body;
        productsModels.addItem(product, (productId) => {
            res.json({ id: productId, message: 'Product created successfully' });
        });

    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteProduct = (req, res) => {
    try {
        // const resp = productsModels.deleteItem(parseInt(req.params.id))
        // res.status(200).json(resp)

        const productId = req.params.id;
        productsModels.deleteItem(productId, (affectedRows) => {
            res.json({ affectedRows, message: 'Product deleted successfully' });
        });

    } catch (err) {
        res.status(500).send(err)
    }
}