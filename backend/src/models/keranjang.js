const dbPool = require('../config/database')

// Menampilkan keranjang
const getProdukinKeranjangbyIDT = (id_transaksi)=>{
    const SQLQuery =`SELECT produk.kode_produk, produk.nama, produk.harga, keranjang.jumlah, (keranjang.jumlah * keranjang.harga_beli) AS subtotal FROM keranjang JOIN produk ON  keranjang.id_produk = produk.idproduk WHERE keranjang.id_transaksi = ${id_transaksi}`
    return dbPool.execute(SQLQuery)
}
// melakukan update patch untuk harga beli dan jumlah beli produk pada keranjnag

const updateProdukinKeranjang = (id_transaksi,id_produk,jumlah_beli,harga_beli) =>{
    const SQLQuery =`UPDATE keranjang 
    SET jumlah = ${jumlah_beli}, harga_beli = ${harga_beli} 
    WHERE id_transaksi = ${id_transaksi} AND id_produk = ${id_produk}`
    return dbPool.execute(SQLQuery)
}

// menghapus isi keranjang
const deleteProdukinKeranjang = (id_transaksi,id_produk) =>{
    const SQLQuery =`DELETE FROM keranjang WHERE id_transaksi = ${id_transaksi} AND id_produk = ${id_produk}`
    return dbPool.execute(SQLQuery)
}
// Menambah isi Keranjang
const addProduktoKeranjang = (id_produk,jumlah,harga_beli,id_transaksi) =>{
    const SQLQuery =`INSERT INTO keranjang (id_produk, jumlah, harga_beli, id_transaksi) VALUES (${id_produk}, ${jumlah}, ${harga_beli}, ${id_transaksi})`
    return dbPool.execute(SQLQuery)
}


module.exports = {
    getProdukinKeranjangbyIDT,
    updateProdukinKeranjang,
    deleteProdukinKeranjang,
    addProduktoKeranjang
   
}