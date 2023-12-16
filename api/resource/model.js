// build your `Resource` model here

const db = require('../../data/dbConfig')


async function findResources(){
return  db('resources').select('*')
}


async function postRes (resource) {
const [resource_id] = await db('resources').insert(resource)

const nRes = await db('resources').where({resource_id}).first()
return nRes
}

module.exports = {
   findResources,       
   postRes    
}