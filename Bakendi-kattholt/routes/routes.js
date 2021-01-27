const express = require('express')
const router = express.Router()
const tyndurKisiCopy = require('..models/tyndurKisi')


router.post('/kitty', (request, response) =>{
    const nyrKisi = new tyndurKisiCopy({
        heitiKattar:request.body.heitiKattar,
        kyn:request.body.kyn,
        aldur:request.body.aldur,
        Örmerking:request.body.Örmerking,
        Nr:request.body.Nr,
        Litur:request.body.Litur
    })
    nyrKisi.save()
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })

    

})

module.exports = router