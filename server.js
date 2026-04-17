const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');

dotenv.config('./.env');

app.use(express.json());
app.use(cors())


// mongodb connection
mongoose.connect(process.env.MONGODB_URI).then(()=>{console.log('connection sucessful')}).catch((err)=>{console.log(`error encountered ${err}`)});

// Schema
const userSchema = new mongoose.Schema({
    name: String, 
    email: String,
    password: String
})

const User = mongoose.model('user', userSchema);


app.post('/register', async (req,res)=>{
    console.log(req.body);
    try{
        const user = new User(req.body);
        await user.save();

        res.status(201).json(user);
    }catch(err){
        res.status(501).json({
            message: err.message
        })
    }
})

app.listen(5000, err=>{
    if(err){
        console.log(`error found ${err}`)
    }
    console.log('server is running on port 5000')
})
/* 


*/
