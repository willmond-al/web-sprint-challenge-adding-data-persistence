// build your `/api/tasks` router here
const express = require('express')

const Tasks = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Tasks.find()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(err =>{
        res.status(500).json({ message: "couldn't get tasks"})
    })
})

router.post('/', (req, res) => {
    const taskData = req.body
    Tasks.add(taskData)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "couldn't add task"})
    })
})

module.exports = router