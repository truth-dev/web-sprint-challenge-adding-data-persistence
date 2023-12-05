// build your `Resource` model here

const db = require('../../data/dbConfig')


async function getAllResources(){
return db('resources')
}


async function createResources (resource) {
const [resource_id] = await db('resources').insert(resource)

const newResource = await db('resources').where('resource_id',resource_id).first()
return newResource 

}

module.exports = {
    getAllResources,
    createResources,
    
}