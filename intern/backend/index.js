const express =require('express');
const cors=require('cors');
const morgan =require('morgan');
require('dotenv').config();
 require('./db/connections');
 const cartRoutes= require('./routes/cartRoutes')
 const userRoutes= require('./routes/userRoutes')
 const ProductRoutes= require('./routes/productRoutes')
const Port= 3001;


const app = express();


app.use(cors());
app.use(morgan('dev'))
app.use('/apic',cartRoutes);
app.use('/apiu',userRoutes);
app.use('/apip',ProductRoutes);


app.listen(Port,()=>{
    console.log(`Server is running on ${Port}`);

})