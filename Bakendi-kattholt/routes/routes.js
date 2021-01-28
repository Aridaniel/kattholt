const express = require('express')
const router = express.Router()
const tyndurKisiCopy = require('../models/kottur')


router.post('/kittyprofile', (request, response) =>{
    const nyrKisi = new tyndurKisiCopy({
        heitiKattar:request.body.heitiKattar,
        kyn:request.body.kyn,
        aldur:request.body.aldur,
        ormerking:request.body.ormerking,
        nr:request.body.nr,
        litur:request.body.litur,
        heitiEigandi:request.body.heitiEigandi,
        ktEigandi:request.body.ktEigandi,
        heimilisfangEigandi:request.body.heimilisfangEigandi,
        simiEigandi:request.body.simiEigandi,
        athugasemdir:request.body.athugasemdir
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