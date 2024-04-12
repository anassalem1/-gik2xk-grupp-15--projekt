const router = require("express").Router();
const db = require("../models");
const ratingService = require("../services/ratingService");

router.post("/", (req, res) => {
  console.log(req.body);
  const { product_id, rating } = req.body;
  ratingService.create({ product_id: product_id, rating }).then((result) => {
    res.status(result.status).json(result.data);
  });
});
router.get("/", (req, res) => {
  ratingService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
