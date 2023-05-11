const kategoriModels = require('../models/kategori')

// get
const getAllKat = async (req,res) => {
    try {
        const [rows] = await kategoriModels.getAllKat()
        res.json({
            message: 'GET success',
            data:rows
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,

        })       
    }
}

// create - post
const createKat = async (req,res) => {
    const bodyPayLoad = req.body
    try {
        await kategoriModels.createKat(bodyPayLoad)
        res.status(201).json({
            message:'Create Kategori Sucess',
            data: bodyPayLoad
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })  
    }
}

const patchKat = async (req,res) =>{
    const {id} = req.params
    const {body}= req

    try {
        await kategoriModels.updateKat(body,id)
        res.json({
            message: "Patch Berhasil",
            data: req.body,
            
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
    
}

const deleteKat = async(req,res) =>{
    const {id} = req.params
    try {
        await kategoriModels.deleteKat(id)
        res.json({
            message: "Delete Success",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
    
    
}
module.exports = {
    getAllKat,
    createKat,
    patchKat,
    deleteKat
}