const express = require('express')
const router = express.Router()
const keranjangCtrl = require('../controllers/keranjang')

// menambahkan keranjang
router.post('/',keranjangCtrl.addKeranjang)
// Menambahkan Produk Ke keranjang
router.post('/addProduk/:id_transaksi',keranjangCtrl.addProduktoKeranjang)

// menampilkan isi keranjang - get
router.get('/:id_transaksi',keranjangCtrl.getKeranjang)
// mengedit isi keranjang
router.patch('/:id_transaksi/:id_produk',keranjangCtrl.updateKeranjang)
// menghapus isi keranjang
router.delete('/:id_transaksi/:id_produk',keranjangCtrl.deleteKeranjang)






module.exports = router