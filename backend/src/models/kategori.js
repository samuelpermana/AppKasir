const dbPool = require('../config/database')

// GET MODELS
const getAllKat= () =>{
    const SQLQuery ='SELECT * FROM kategori' 
    return dbPool.execute(SQLQuery)
}

// CREATE MODELS
const createKat= (body) =>{
    const SQLQuery =`INSERT INTO kategori (nama_kategori) VALUES ('${body.nama_kategori}')`
    return dbPool.execute(SQLQuery)
}

// UPDATE MODELS - PATCH
const updateKat= (body,id) =>{
    const SQLQuery =`UPDATE kategori SET nama_kategori='${body.nama_kategori}' WHERE idkategori=${id}`
    return dbPool.execute(SQLQuery)
}

// delete MODELS
const deleteKat= (id) =>{
    const SQLQuery =`DELETE FROM kategori WHERE idkategori=${id}`
    return dbPool.execute(SQLQuery)
}
module.exports = {
    getAllKat,
    createKat,
    updateKat,
    deleteKat
}