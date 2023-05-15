const express = require('express')
const router = express.Router()
const produkStokCtrl = require('../controllers/produkStok')
const dbDummy = require('../dbDummy')

// Menampilkan seluruh data Produk
router.get('/',produkStokCtrl.getAllProduct)
// byName
router.get('/search',produkStokCtrl.getProductbyName)
// byKategori
router.get('/kategori',produkStokCtrl.getProductbyCategory)
// byID
// router.get('/:id',produkStokCtrl.getProductbyId)



// Membuat Product baru
router.post('/',produkStokCtrl.createProduct)
// update Product
router.put('/:id',produkStokCtrl.updateProduct)
//  delete product
router.delete('/:id',produkStokCtrl.deleteProduct)


module.exports = router