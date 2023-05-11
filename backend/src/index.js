require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const kategoriRoute = require('./routes/kategori')
const produkStokRoute = require('./routes/produkStok')
const keranjangRoutes = require('./routes/keranjang')

app.use(express.json())
app.use(express.static('public'))

app.use('/produkStok', produkStokRoute)
app.use('/kategori', kategoriRoute)
app.use('/keranjang',keranjangRoutes)



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})