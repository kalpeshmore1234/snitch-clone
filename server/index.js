const express = require("express")
const mongoose = require("mongoose")
const cors  = require("cors")
const  RegisterModel = require("./models/Register")

const app = express()
app.use(express.json())
app.use(cors(
    {
        origin: ["https://deploy-mern-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
))

mongoose.connect("mongodb+srv://klapesh3869:Kalpesh@12345@cluster0.rqwwonh.mongodb.net/Kalpesh?retryWrites=true&w=majority")

app.get("/", (req, res) => {
    res.json("Hello");
})
app.post('/register', (req, res) => {
    const {firstName, lastName,  email, password} = req.body;
    RegisterModel.findOne({email: email})
    .then(user => {
        if(user) {
            res.json("Already have an account")
        } else {
            RegisterModel.create({firstName: firstName, lastName: lastName, email: email, password: password})
            .then(result => res.json(result))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
})

app.listen(5173, () => {
    console.log("server is running")
})