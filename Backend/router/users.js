const router = require("express").Router();
const Order = require("../model/order");

router.get("/home/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const id = req.params.id;
    const prevOrder = await Order.find({ userId: id });
    res.status(200).json(prevOrder);
  } catch (err) {
    res.status(400).json("There are problem to reach the route /home !!");
  }
});
router.post("/neworder/:id", async (req, res) => {
  const obj = JSON.parse(req.body.data);
  const id = req.params.id;
  console.log(obj);
  try {
    const {
      Event_Type,
      Date,
      City,
      Location,
      Number_Guests,
      Service_Class,
      Name,
      Phone,
      total,
    } = obj;

    const status = "pending";

    const Neworderr = await Order.create({
      userId: id,
      Event_Type,
      Date,
      City,
      Location,
      Number_Guests: Number(Number_Guests),
      Service_Class: Number(Service_Class),
      Name,
      Phone,
      payment: total,
      status,
    });
    res.status(200).json(Neworderr);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
