import mongoose from "mongoose";
import ProductInterface, { Feature } from "../types/Product";

const productSchema = new mongoose.Schema<ProductInterface>({
  productImage: {
    type: String,
    default: "",
  },

  productDetails: {
    type: String,
    default: "",
  },
  productFeatures: {
    type: [],
    default: [],
  },
  productPreview: {
    type: String,
    default: "",
  },
});

export default mongoose.model("Product", productSchema);
