// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')
const router = express.Router()



router.get('/resources', (req, res, next) => {
Resource.getAllResources()
.then(reso => {
   res.json(reso)
   
})
.catch(err => {
    next(err)
})
})



router.post('/resources', (req, res, next) => {
Resource.createResources(req.body)
.then(newReso => {
    res.json(newReso)
})
.catch(err => {
    next(err)
})
})
module.exports = router;