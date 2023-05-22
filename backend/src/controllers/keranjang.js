const prodStockMdl= require('../models/produkStok')
const keranjangModels = require('../models/keranjang')

// Membuat Keranjang (praTransaksi)
const addKeranjang = async (req,res) =>{
    try {
        await keranjangModels.addKeranjang()
        res.json({
            message: 'berhasil membuat keranjang'
        })
    } catch (error) {
        res.json({
            message:'server error',
            serverMessage: error
        })
        
    }
}
// Menambahkan produk ke Keranjang (praTransaksi)
const addProduktoKeranjang = async (req,res) =>{
    const {id_transaksi} = req.params
    const {id_produk}= req.body
    const {jumlah}= req.body
    const [produk] = await prodStockMdl.getProductbyId(id_produk)
    const nama = produk[0].nama
    const harga_beli = produk[0].harga
    try {
        const [ProdukAvail]=  await keranjangModels.cekprodukInKeranjang(nama,id_transaksi)
        const isProdukAvail = ProdukAvail[0][["COUNT(*) > 0"]]
        if (isProdukAvail===1) {
            await keranjangModels.addJumlah(nama,id_transaksi,jumlah)
        }else{
            await keranjangModels.addProduktoKeranjang(id_produk,nama,jumlah,harga_beli,id_transaksi)
        }
        
        res.json({
            message: 'berhasil menambahkan produk ke keranjang',
            isProdukAvail,
        })
    } catch (error) {
        res.json({
            message:'server error',
            serverMessage: error
        })
        
    }
}

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




module.exports = {
    getKeranjang,
    updateKeranjang,
    deleteKeranjang,
    addKeranjang,
    addProduktoKeranjang
}