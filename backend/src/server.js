const todosRoutes = require("./routes")
const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")

const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
//app.use(express.json())
app.use(todosRoutes)
app.get("/health", (req, res)=>{
    res.json("up")
})

app.listen(3002, ()=>{
    console.log("3002")
})