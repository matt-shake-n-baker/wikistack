const express = require('express')
const router = express.Router();
const { userList, userPages} = require('../views')


// parses url-encoded bodies
router.use(express.urlencoded({ extended: false }));
// parses json bodies
router.use(express.json())

// GET /wiki/ 
router.get('/', (req,res) => {
    res.send();
})

// // POST /wiki/ 
// router.post('/', (req,res) => {
//     //
// })



// GET /wiki/ 
// router.get('/add', (req,res,next) => {
//     res.send(addPage())
// })

module.exports = router;