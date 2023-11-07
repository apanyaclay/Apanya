// import { getItem, listItems, editItem, addItem, deleteItem } from '../models/users.models.js'
// const usersModels = require('../models/users.models');
import usersModels from '../models/users.models.js';

export const getUser = (req, res) => {
    try {
        // const resp = usersModels.getItem(parseInt(req.params.id))
        // res.status(200).json(resp)

        const userId = req.params.id;
        usersModels.getItem(userId, (user) => {
            if (!user) {
                res.status(404).json({"message": "user "+userId+" not found"})
            }
            res.json(user);
        });

    } catch (err) {
        res.status(500).send(err)
    }
}

export const listUsers = (req, res) => {
    try {

        usersModels.listItems((users) => {
            res.json(users);
        });

        // const resp = usersModels.listItems()
        // res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const editUser = (req, res) => {
    try {

        const userId = req.params.id;
        const user = req.body;
        usersModels.editItem(userId, user, (affectedRows) => {
            res.json({ affectedRows, message: 'user updated successfully' });
        });

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addUser = (req, res) => {
    try {
        // const resp = usersModels.addItem(req.body)
        // res.status(200).json(resp)
        const user = req.body;
        usersModels.addItem(user, (userId) => {
            res.json({ id: userId, message: 'user created successfully' });
        });

    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteUser = (req, res) => {
    try {
        // const resp = usersModels.deleteItem(parseInt(req.params.id))
        // res.status(200).json(resp)

        const userId = req.params.id;
        usersModels.deleteItem(userId, (affectedRows) => {
            res.json({ affectedRows, message: 'user deleted successfully' });
        });

    } catch (err) {
        res.status(500).send(err)
    }
}