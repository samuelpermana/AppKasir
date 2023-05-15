// const dbDummy = require('../dbDummy')
const prodStockMdl= require('../models/produkStok')



// Menampilkan seluruh data Produk
const getAllProduct =async(req,res)=>{
    try {
        const [data] = await prodStockMdl.getAllProduct()
        res.json({
            message: 'get all product success',
            data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

// byId
const getProductbyId = async(req,res)=>{
    const {id} = req.params
    try {
        const [data] = await prodStockMdl.getProductbyId(id)
        res.json({
            message: 'get product by ID success',
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const getProductbyName = async (req,res)=>{
    const {name} = req.query
    try {
        const [data] = await prodStockMdl.getProductbyName(name)
        res.json({
            message: 'get product by Name success',
            data
            
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
const getProductbyCategory = async (req,res)=>{
    const {idKategori} = req.query
    try {
        const [produks]= await prodStockMdl.getProductbyIdKategori(idKategori)
        res.json({
            message:"get product by category success",
            produks
            
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

// membuat product
const createProduct =async(req,res)=>{
  const dataBaru = req.body
  try {
    await prodStockMdl.createProduct(dataBaru)
    res.status(201).json({
        message: 'Create Product Success',
        data:dataBaru,
    })
    
  } catch (error) {
    res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
    })  
  }
}

const updateProduct = async (req,res) =>{
    const dataBaru = req.body
    const {id} = req.params
    
    try {
        await prodStockMdl.updateProduct(dataBaru,id)
        res.status(201).json({
            message : 'update berhasi;',
            data:dataBaru,
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })  
    }
}

const deleteProduct = async (req,res)=>{
    const {id} = req.params
    try {
        await prodStockMdl.deleteProduct(id)
        res.status(200).json({
            message: 'delete product berhasil ya',
            data:null,
            
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })  
    }
}

module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductbyId,
    getProductbyName,
    getProductbyCategory,
}