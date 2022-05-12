const router = require("express").Router();
const Order = require("../model/order");

//Get all user status pendings !!!
router.get("/admin", async (req, res) => {
  try {
    const orders = await Order.find({ status: "pending" });
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).send("Please see what happen!!!");
  }
});

//Post for one document either Accept or rejected
router.patch("/admin/:id", async (req, res) => {
  const id = req.params.id;
  console.log(req.body) ;
  const {status} = req.body;
  console.log(status) ;
  await Order.updateOne(
    { _id: id },
    {
      status: status,
    }
  );
  res.redirect("/ceremony/admin");
});

module.exports = router;
