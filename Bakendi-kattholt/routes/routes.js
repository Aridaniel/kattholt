
const express = require('express')
const router = express.Router()
const kisi = require('../models/kottur')

// let cats = []; 


// /* This function deletes a user based on its id */
// // const deleteKitty = (req, res) => {
// //     const { id } = req.params;

// //     cats = cats.filter((cat) => cat.id !== id);

// //     res.send(`User with the id ${id} deleted from the database`); // nice message to confirm 
// // };

// router.delete('/:id', (req, res)=>{
//     const deleteKisi = 
// });

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