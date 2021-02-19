const dbConfig = require("../../data/dbConfig")

// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    find(){
        return db("projects")
    },
    add(projectData){
        return db("projects")
        .insert(projectData)
    }   
}