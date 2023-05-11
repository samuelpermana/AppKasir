const express = require('express')
const router = express.Router()
const kategoriController = require('../controllers/kategori')

// CREATE - POST
router.post('/',kategoriController.createKat)

router.get('/',kategoriController.getAllKat)

router.patch('/:id',kategoriController.patchKat)

router.delete('/:id',kategoriController.deleteKat)


module.exports = router