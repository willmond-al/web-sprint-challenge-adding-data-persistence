// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
    find(){
        return db("resources")
    },
    add(resourceData){
        return db("resources")
        .insert(resourceData)
    }   
}