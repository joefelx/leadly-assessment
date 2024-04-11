interface Feature {
  id: number;
  title: string;
  description: string;
}

interface ProductInterface {
  id: number;
  productImage: string;
  productDetails: string;
  productFeatures: Array<Feature>;
  productPreview: string;
}

export { Feature };
export default ProductInterface;
