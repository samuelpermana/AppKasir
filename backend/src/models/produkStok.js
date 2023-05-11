const dbPool = require('../config/database')

// GET MODELS
const getAllProduct= () =>{
    const SQLQuery ='SELECT * FROM produk' 
    return dbPool.execute(SQLQuery)
}
const getProductbyId= (id) =>{
    const SQLQuery =`SELECT * FROM produk WHERE idproduk = ${id};`
    return dbPool.execute(SQLQuery)
}
const getProductbyName= (Name) =>{
    const SQLQuery =` SELECT * FROM produk WHERE nama LIKE '%${Name}%'`
    return dbPool.execute(SQLQuery)
}
const getHargabyId =(id)=>{
    const SQLQuery =`SELECT harga FROM produk WHERE idproduk = ${id};`
    return dbPool.execute(SQLQuery)
}

// Create Models
const createProduct= (body) =>{
    const SQLQuery =`INSERT INTO produk (nama,id_kategori,harga,kode_produk) VALUES ('${body.nama}', ${body.id_kategori}, ${body.harga}, '${body.kode_produk}');`
    return dbPool.execute(SQLQuery)
}
// Update Models
const updateProduct= (body,id) =>{
    const SQLQuery = `UPDATE produk SET nama = '${body.nama}', id_kategori = ${body.id_kategori}, harga= ${body.harga} ,kode_produk ='${body.kode_produk}' WHERE idproduk = ${id}`
    return dbPool.execute(SQLQuery)
}
// delete Models
const deleteProduct = (id) => {
    const SQLQuery = `DELETE FROM produk WHERE idproduk = ${id}`
    return dbPool.execute(SQLQuery)
}


module.exports = {
    getAllProduct,
    getProductbyId,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductbyName,
    getHargabyId
    
}