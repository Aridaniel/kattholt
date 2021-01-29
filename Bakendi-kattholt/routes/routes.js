
const express = require('express')
const router = express.Router()
const kisi = require('../models/kottur')
const mongosse = require('mongoose')
const ObjectId = require('mongoose').Types.ObjectId; 






router.delete('/:id', (req, res)=>{
    const deletekisi = new kisi()
    const { id } = req.params;
    console.log(id)
    deletekisi.find({_id:id}).remove(  function (err) {
        if (err) 
        console.log(err)
      });

    res.send(`User with the id ${id} deleted from the database`);
});

router.post('/kittyprofile', (request, response) =>{
    const nyrKisi = new kisi({
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