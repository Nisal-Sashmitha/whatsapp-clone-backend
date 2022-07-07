import express from 'express'
import mongoose from 'mongoose';
const app = express()
const port = 9000

const conn = mongoose.connect('mongodb+srv://whatsappAdmin:39jPSL2xPa3PZQz1@cluster0.djikn.mongodb.net/?retryWrites=true&w=majority');


if(conn.readyState){
    console.log("connected!")
}
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(port, () => {
   console.log(`listening on port ${port}`)
})