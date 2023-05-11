const prodStockMdl= require('../models/produkStok')
const keranjangModels = require('../models/keranjang')

// get 
const getKeranjang = async (req, res) =>{
    const {id_transaksi} = req.params
    try {
        const [keranjangDb] = await keranjangModels.getProdukinKeranjangbyIDT(id_transaksi)
        res.json({
            message : "get keranjang sukses",
            keranjangDb,
        })    
    } catch (error) {
        res.json({
            message:error
        })
    }
}
// update isi keranjang
const updateKeranjang = async (req,res) =>{
    const id_transaksi = req.params.id_transaksi
    const id_produk = req.params.id_produk
    const harga_beli = req.body.harga_beli
    const jumlah = req.body.jumlah
        
    try {
        await keranjangModels.updateProdukinKeranjang(id_transaksi,id_produk,jumlah,harga_beli)
        res.json({
            message : 'Update keranjang Success',
            id_produk,
            id_transaksi,
            
        })
    } catch (error) {
        res.json({
            message: 'Server Error',
            serverMessage: error,
        })
        
    }
}

const deleteKeranjang = async (req, res) =>{
    const id_transaksi = req.params.id_transaksi
    const id_produk = req.params.id_produk
    
    try {
        await keranjangModels.deleteProdukinKeranjang(id_transaksi,id_produk)
        res.json({
            message:'Delete Berhasil',
            
        })
    } catch (error) {
        res.json({
            message:'server error',
            serverMessage: error
        })
    }
}

// Menambahkan produk ke keranjang
const addProduktoKeranjang = async (req,res) =>{
    try {
        const {id_produk,jumlah} = req.body
        const {id_transaksi} = req.params
        const [harga] = await prodStockMdl.getHargabyId(id_produk)
        const harga_beli = harga[0].harga
        
        
        await keranjangModels.addProduktoKeranjang(id_produk, jumlah, harga_beli, id_transaksi)
        
        res.json({
            message: 'berhasil menambahkan produk',
            
            
        })
    } catch (error) {
        res.json({
            message:'server error',
            serverMessage: error
        })
        
    }
}


module.exports = {
    getKeranjang,
    updateKeranjang,
    deleteKeranjang,
    addProduktoKeranjang
}