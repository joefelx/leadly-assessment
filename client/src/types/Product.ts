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

export type { Feature };
export default ProductInterface;
