const mongoose =require('mongoose');

mongoose.connect("mongodb+srv://nivedkrishna14:nived@cluster0.tl8t6aw.mongodb.net/EcomApp?retryWrites=true&w=majority&appName=Cluster0")

.then(()=>{
    console.log("connected to database");
})
.catch((error)=>{
    console.log(error);
})