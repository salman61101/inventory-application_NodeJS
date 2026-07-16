const { Router } = require("express");

const categoryRouter = Router();

categoryRouter.get("/", (req, res) => {
    res.send("All Categories");
});

module.exports = categoryRouter;