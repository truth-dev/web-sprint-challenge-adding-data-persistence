// build your `Resource` model here

const db = require('../../data/dbConfig')


async function findResources(){
return await db('resources').select('*')
}


async function postRes (resource) {
const [resource_id] = await db('resources').insert(resource)
return await db('resources').where({resource_id}).first()
}

module.exports = {
   findResources,       
   postRes    
}