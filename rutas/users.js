const express = require('express');
const faker = require("faker");
const router = express.Router();

router.get('/add', (req, res) => {
    res.json({
        name: 'jkiji',
        price: '777'
    })
});


router.get('/update', (req, res) => {
    res.send("update")
});


router.get('/delete', (req, res) => {
    res.send("delete")
});


router.get('/all', (req, res) => {
    res.json("all")
});


router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.json({
        name: 'algo',
        id
    })
});

module.exports = router;
