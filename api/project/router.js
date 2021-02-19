// build your `/api/projects` router here
const express = require('express')

const Projects = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
        res.json(projects)
    })
    .catch(err =>{
        res.status(500).json({ message: "couldn't get projects"})
    })
})

router.post('/', (req, res) => {
    const projectData = req.body
    Projects.add(projectData)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "couldn't add project"})
    })
})

module.exports = router