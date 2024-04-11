import express from "express";
import Product from "../../models/product";

const router = express.Router();

interface ResponseType {
  status: number;
  success: Boolean;
  error: Boolean;
  data: Object;
}

router.get("/", async (req, res) => {
  try {
    const product = await Product.find();

    const response: ResponseType = {
      status: 200,
      success: true,
      error: false,
      data: product,
    };

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const body = req.body;

    const product = new Product(body);

    const savedProduct = await product.save();

    if (savedProduct) {
      const response: ResponseType = {
        status: 201,
        success: true,
        error: false,
        data: {
          message: "Saved!",
        },
      };

      return res.status(201).json(response);
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
