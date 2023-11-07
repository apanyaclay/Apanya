import db from '../../db/db.js'

export const getItem = id => {
    try {
        const product = db?.products?.filter(product => product?.id === id)[0]
        return product
    } catch (err) {
        console.log('Error', err)
    }
}

export const listItems = () => {
    try {
        return db?.products
    } catch (err) {
        console.log('Error', err)
    }
}

export const editItem = (id, data) => {
    try {
        const index = db.products.findIndex(product => product.id === id)

        if (index === -1) throw new Error('product not found')
        else {
            db.products[index] = data
            return db.products[index]
        }        
    } catch (err) {
        console.log('Error', err)
    }
}

export const addItem = data => {
    try {  
        const newproduct = { id: db.products.length + 1, ...data }
        db.products.push(newproduct)
        return newproduct

    } catch (err) {
        console.log('Error', err)
    }
}

export const deleteItem = id => {
    try {
        // delete item from db
        const index = db.products.findIndex(product => product.id === id)

        if (index === -1) throw new Error('product not found')
        else {
            db.products.splice(index, 1)
            return db.products
        }
    } catch (error) {
        
    }
}