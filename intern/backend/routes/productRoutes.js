const express=require('express');
const router=express.Router();
const ProductModel=require('../model/products')


router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.post('/sell', async (req, res) => {
    const { pname, price, category, img, description } = req.body;
    if (!pname || !price || !category || !img || !description) {
      return res.status(404).json("You missed a required data");
    }
    try {
      const prevname = await ProductModel.findOne({ pname: pname });
      if (prevname) {
        return res.status(404).json("product already exist ");
      }  else {
        const addProduct = new ProductModel({
          pname,
          price,
          category,
          img,
          description
        });
        await addProduct.save();
        return res.status(200).json(addProduct);
      }
    } catch (error) {
      return res.status(404).json(error);
    }
  });
 
 
  router.get('/products', async (req, res) => {
    try {
      const data = await ProductModel.find().exec();
      res.json(data);
    } catch (error) {
      res.status(404).json(error);
    }
  });

  router.delete('/del/:id', async (req, res) => {
    try {
      const id = req.params.id;
      await ProductModel.findByIdAndDelete(id);
      res.json("Logged out")
    } catch (error) {
      res.status(404).json(error)
    }
  })

  router.put('/edit/:id', async (req, res) => {
    const { pname, price, category, img, description } = req.body;
    if (!pname || !price || !category || !img || !description) {
      return res.status(400).json({ message: "You missed a required data" });
    } else {
      try {
        const id = req.params.id;
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, {
          pname,
          price,
          category,
          img,
          description
        });
        return res.status(200).json(updatedProduct);
      } catch (error) {
        return res.status(404).json({ message: "Error updating item", error });
      }
    }
  });

router.get('/product/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductModel.findById(id);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;