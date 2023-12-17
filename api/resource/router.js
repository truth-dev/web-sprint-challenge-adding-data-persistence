// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");
const router = express.Router();

router.get("/", async (req, res) => {
  const resources = await Resource.findResources();
  res.json(resources);
});

router.post("/", async (req, res, next) => {
    const dataResource = req.body;
    if (!dataResource || !dataResource.resource_name) {
        res.status(400).json({
            message: "please provide a resource name",
        });
    } else {
        try {
            const newResource = await Resource.postRes(dataResource);
            res.status(201).json(newResource);
        } catch (err) {
            if (err.message === 'A resource with this name already exists') {
                res.status(400).json({ message: err.message });
            } else {
                next(err);
            }
        }
    }
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: "something went wrong, try again",
    err: err.message,
    stack: err.stack,
  });
  next();
});
module.exports = router;
