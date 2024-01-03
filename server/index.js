const express = require("express")
const mongoose = require("mongoose")
const cors  = require("cors")
const EmployeeModel = require("./models/Employee")

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials:true
}))

mongoose.connect("mongodb+srv://Kalpesh:Kalpesh@12345@cluster0.5x3ssjj.mongodb.net/test?retryWrites=true&w=majority")

app.post("/login", (req, res) => {
   const {email, password} = req.body
   EmployeeModel.findOne({email:email})
   .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            } else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
   })
})

app.post("/register", (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch((err) => res.json(err))
})

app.listen(5173, () => {
    console.log("server is running")
})