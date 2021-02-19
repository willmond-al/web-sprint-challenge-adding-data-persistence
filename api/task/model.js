// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    find(){
        return db("tasks")
    },
    add(taskData){
        return db("tasks")
        .insert(taskData)
    }   
}