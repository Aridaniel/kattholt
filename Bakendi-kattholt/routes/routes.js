const express = require('express')
const router = express.Router()

router.post('/kitty', (request, response) =>{
    response.send('send')
})

module.exports = router