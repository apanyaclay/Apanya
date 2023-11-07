import supertest from 'supertest' // Import supertest
import server from '../../app' // Import the server object
const requestWithSupertest = supertest(server) // We will use this function to mock HTTP requests

describe('GET "/"', () => {
    test('GET "/" returns all products', async () => {
        const res = await requestWithSupertest.get('/products')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual([
            {
                id: 1,
                name: 'Rex',
                type: 'dog',
                age: 3,
                breed: 'labrador',
            },
            {
                id: 2,
                name: 'Fido',
                type: 'dog',
                age: 1,
                breed: 'poodle',
            },
            {
                id: 3,
                name: 'Mittens',
                type: 'cat',
                age: 2,
                breed: 'tabby',
            },
        ])
    })
})

describe('GET "/:id"', () => {
    test('GET "/:id" returns given product', async () => {
        const res = await requestWithSupertest.get('/products/1')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual(
            {
                id: 1,
                name: 'Rex',
                type: 'dog',
                age: 3,
                breed: 'labrador',
            }
        )
    })
})

describe('PUT "/:id"', () => {
    test('PUT "/:id" updates product and returns it', async () => {
        const res = await requestWithSupertest.put('/products/1').send({
            id: 1,
            name: 'Rexo',
            type: 'dogo',
            age: 4,
            breed: 'doberman'
        })
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual({
            id: 1,
            name: 'Rexo',
            type: 'dogo',
            age: 4,
            breed: 'doberman'
        })
    })
})

describe('POST "/"', () => {
    test('POST "/" adds new product and returns the added item', async () => {
        const res = await requestWithSupertest.post('/products').send({
            name: 'Salame',
            type: 'cat',
            age: 6,
            breed: 'pinky'
        })
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual({
            id: 4,
            name: 'Salame',
            type: 'cat',
            age: 6,
            breed: 'pinky'
        })
    })
})

describe('DELETE "/:id"', () => {
    test('DELETE "/:id" deletes given product and returns updated list', async () => {
        const res = await requestWithSupertest.delete('/products/2')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual([
            {
                id: 1,
                name: 'Rexo',
                type: 'dogo',
                age: 4,
                breed: 'doberman'
            },
            {
                id: 3,
                name: 'Mittens',
                type: 'cat',
                age: 2,
                breed: 'tabby',
            },
            {
                id: 4,
                name: 'Salame',
                type: 'cat',
                age: 6,
                breed: 'pinky'
            }
        ])
    })
})