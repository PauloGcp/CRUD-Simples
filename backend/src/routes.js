const express = require("express")

//ele que fará a interação entre cliente<->db
const {PrismaClient} = require("@prisma/client")

const todosRoutes = express.Router()
const allTodos = [{name: "aaaa", status: false}]
const prisma = new PrismaClient()

//c
todosRoutes.post("/todos", async (req, res)=>{
    const { name, status } = req.body
    //todo = model criado no schema
    const todo = await prisma.todo.create({
        data: {
            name,
        }
    })
    return res.status(201).json(allTodos)
})
//r
todosRoutes.get("/todos", async (req, res)=>{
    const todos = await prisma.todo.findMany()
    return res.status(201).json(todos)
})
//u
todosRoutes.put("/todos", async (req, res)=> {
    const {name, id, status } = req.body

    if(!id){
        return res.status(400).json("id is undefined")
    }

    const todoAlreadyExist = await prisma.todo.findUnique({
        where:{
            id
        }
    })

    if (!todoAlreadyExist) {
        return res.status(400).json("id inexistent")
    }

    const todo = await prisma.todo.update({
        where: {
            id,
        },
        data: {
            name,
            status
        }
    })
    return res.status(201).json(todo)
})
//d
todosRoutes.delete("/todos/:id", async (req, res)=>{
    const {id} = req.params

    //quando o id chega pelo parametro da req, ele vem em formato de String  
    const intId = parseInt(id)

    if(!intId){
        return res.status(400).json("id is undefined")
    }

    const todoAlreadyExist = await prisma.todo.findUnique({
        where:{
            id: intId
        }
    })

    if (!todoAlreadyExist) {
        return res.status(400).json("id inexistent")
    }

    const deleteTodo = await prisma.todo.delete({
        where:{
            id: intId
        }
    })
    return res.status(200)
})

module.exports = todosRoutes;
