import AMUL from "../assets/amul.avif";
import AMUL_CASE_STUDY from "../assets/amul-case-study.avif";
import ProductInterface from "../types/Product";

const DUMMY_DATA: Array<ProductInterface> = [
  {
    id: 0,
    productImage: AMUL,
    productDetails:
      "Enabling India’s most loved FMCG brand to match pace with the changing buying habits of a dynamic nation",
    productFeatures: [
      {
        id: 0,
        title: "Multi Vendor Marketplace",
        description:
          "Leverages the existing dealer network for decentralized fulfillment",
      },
      {
        id: 1,
        title: "Multi Vendor Marketplace",
        description:
          "Leverages the existing dealer network for decentralized fulfillment",
      },
      {
        id: 2,
        title: "Multi Vendor Marketplace",
        description:
          "Leverages the existing dealer network for decentralized fulfillment",
      },
      {
        id: 3,
        title: "Multi Vendor Marketplace",
        description:
          "Leverages the existing dealer network for decentralized fulfillment",
      },
    ],
    productPreview: AMUL_CASE_STUDY,
  },
  {
    id: 1,
    productImage: AMUL,
    productDetails:
      "Enabling India’s most loved FMCG brand to match pace with the changing buying habits of a dynamic nation",
    productFeatures: [
      {
        id: 0,
        title: "Multi Vendor Marketplace",
        description:
          "Leverages the existing dealer network for decentralized fulfillment",
      },
    ],
    productPreview: AMUL_CASE_STUDY,
  },
  {
    id: 2,
    productImage: AMUL,
    productDetails:
      "Enabling India’s most loved FMCG brand to match pace with the changing buying habits of a dynamic nation",
    productFeatures: [
      {
        id: 0,
        title: "Multi Vendor Marketplace",
        description:
          "Leverages the existing dealer network for decentralized fulfillment",
      },
    ],
    productPreview: AMUL_CASE_STUDY,
  },
  {
    id: 4,
    productImage: AMUL,
    productDetails:
      "Enabling India’s most loved FMCG brand to match pace with the changing buying habits of a dynamic nation",
    productFeatures: [
      {
        id: 0,
        title: "Multi Vendor Marketplace",
        description:
          "Leverages the existing dealer network for decentralized fulfillment",
      },
    ],
    productPreview: AMUL_CASE_STUDY,
  },
];

export default DUMMY_DATA;
