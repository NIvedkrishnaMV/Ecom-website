const express = require("express")
const router = express.Router();
const CartModel = require('../model/cartinfo')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Add Product To Cart
router.post("/add", async (req, res) => {
    const { pname, price, category } = req.body;
    // Create a new product with these values
    const product = new CartModel({ pname, price, category });
    try {
      const data = await product.save();
      res.status(200).json({ message: "Product Added.", data });
    } catch (err) {
      console.log(err);
      res.json({ message: "Unable To Add." });
    }
  });

// Get Product From Cart
router.get("/view", async (req, res) => {
    try {
      const data = await CartModel.find().lean(); // use lean() to get plain JS objects
      res.status(200).json(data);
    } catch (err) {
      console.error(err); // use console.error for better error logging
      res.status(500).json({ message: "Error fetching data" });
    }
  });

router.delete('/delete/:id', async (req, res) => {
    try {
      const id = req.params.id;
      await CartModel.findByIdAndDelete(id);
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error deleting product' });
    }
  });


module.exports = router;