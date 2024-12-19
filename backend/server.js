import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoute.js'

//App Config
const app =express()
const port = process.env.PORT || 4000
connectDb()
connectCloudinary();

//middlewares
app.use(express.json())
app.use(cors())

//api endpoints
app.get('/',(req,res)=>{
    res.send('API Working')
})

app.use('/api/user', userRouter);
app.use('/api/product', productRouter)

app.listen(port,()=>console.log('Server started on PORT : '+ port))
