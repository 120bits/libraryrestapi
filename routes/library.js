const Router = require('express-promise-router')
const db = require('../db')
const { v4: uuidv4 } = require('uuid');
const router = new Router()

module.exports = router

router.get('/all', async (req, res) => {
  const { rows } = await db.query('SELECT id, data as details FROM public.books')
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(rows, null, 4));
})

//CRUD APIs

router.get('/book/:id', async (req, res) => {
        const { id } = req.params
        const query = "SELECT id, data as details FROM public.books WHERE id = $1"
        try {
                const { rows } = await db.query(query, [id])
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send(JSON.stringify(rows[0], null, 4))
        } catch (err) {
                console.log(err.stack)
                res.status(500).send(err.stack);
        }
})

router.post('/book/', async (req, res) => {
        const data = req.body;
        let uuid = uuidv4();
        const query = "INSERT INTO public.books(id, data) VALUES ($1, $2)";
        try {
                const result = await db.query(query, [uuid, data])
                res.status(201).send('Book ' + uuid + ' is added to the Library');
        } catch (err) {
                console.log(err.stack)
                res.status(500).send(err.stack);
        }
})

router.delete('/book/:id', async (req, res) => {
        const { id } = req.params
        const query = "DELETE FROM public.books WHERE id = $1"
        try {
                await db.query(query, [id])
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send('Book ' + id + ' has been deleted.')
        } catch (err) {
                console.log(err.stack)
                res.status(500).send(err.stack);
        }
})

router.put('/book/:id', async (req, res) => {
        const data = req.body
        const {id} = req.params
        const query = "UPDATE public.books SET data = $1 WHERE id = $2"
        try {
                await db.query(query, [data, id])
                res.status(201).send('Book ' + id + ' has been updated.')
        } catch (err) {
                console.log(err.stack)
                res.status(500).send(err.stack);
        }
})
