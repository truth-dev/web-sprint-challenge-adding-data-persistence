// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')
const router = express.Router()



router.get('/', (req, res, next) => {

Resource.getAllResources()
.then(reso => {
   res.json(reso)
   
})
.catch(err => {
    next(err)
})
})



router.post('/', async (req, res, next) => {
const resource = req.body
if(!resource || !resource.resource_name){
    res.status(400).json({
        message: "please provide a resource name"
    })
}
try {
    const newResource = await Resource.createResources(resource)
    res.status(201).json(newResource)
} catch (err) {     
    next(err)   
}
})

router.use((err, req, res, next ) => {
    res.status(err.status || 500).json({
        message: 'something went wrong, try again',
        err: err.message,
        stack:err.stack,
    })
    next()
});
module.exports = router;