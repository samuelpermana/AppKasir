const express = require('express')
const router = express.Router()
const keranjangCtrl = require('../controllers/keranjang')

// menambahkan isi keranjang - get
router.get('/:id_transaksi',keranjangCtrl.getKeranjang)
// mengedit isi keranjang
router.patch('/:id_transaksi/:id_produk',keranjangCtrl.updateKeranjang)
// menghapus isi keranjang
router.delete('/:id_transaksi/:id_produk',keranjangCtrl.deleteKeranjang)
// menambahkan produk ke keranjang
router.post('/:id_transaksi',keranjangCtrl.addProduktoKeranjang)





module.exports = router