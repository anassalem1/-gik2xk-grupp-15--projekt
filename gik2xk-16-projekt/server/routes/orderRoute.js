const router = require("express").Router();
const orderService = require("../services/orderService");

router.get("/:id", (req, res) => {
  const id = req.params.id;

  orderService.getById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/", (req, res) => {
  orderService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post("/", (req, res) => {
  const order = req.body;
  orderService.create(order).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put("/", (req, res) => {
  const order = req.body;
  const id = order.id;

  orderService.update(order, id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete("/", (req, res) => {
  const id = req.body.id;

  orderService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
