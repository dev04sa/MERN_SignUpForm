const express =require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1/SignUp').then( ()=> console.log("Success") );


const UserSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const UserModel=mongoose.model("user",UserSchema);

app.post('/signup',(req,res)=> {
    const {name,email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user => {
        if(user) {
            res.json("User Already exist");
        } else {
            UserModel.create({name:name,email: email,password : password})
            .then(result => res.json("Account created"))
            .catch(err => console.log(err))
        }
    }).catch(err => console.log(err))
})

app.listen(3001,()=> {
    console.log('running');
})