const { Router } = require("express");

const itemRouter = Router();

itemRouter.get("/", (req, res) => {
    res.send("All Items");
});

module.exports = itemRouter;