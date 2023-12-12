// build your `Resource` model here

const db = require('../../data/dbConfig')


async function findResources(){
return db('resources').select('*')
}


async function postRes (resource) {
const [resource_id] = await db('resources').insert(resource)
return db('resources').where({resource_id}).first()
}

module.exports = {
   findResources,       
   postRes    
}