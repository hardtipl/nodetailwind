const express=require('express')
const ejs=require('ejs')
const applicaion=express();
applicaion.use(express.json());
applicaion.use(express.urlencoded({extended:true}))
// applicaion.use("/public",express.static('public'));
applicaion.use(express.static('public'));

applicaion.set('view engine',"ejs")
applicaion.set('views', __dirname + '/template');
applicaion.get("/",(req,res)=>{
    res.render('test', { title: 'My App', message: 'Hello, World!' });
})

applicaion.listen(9000,()=>console.log("server started on 9000"))

