import { useEffect, useState } from "react";

import ProductInterface from "../types/Product";
import DUMMY_DATA from "../data/dummyData";

import { IoArrowUp } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SERVER_URL = process.env.SERVER_URL;

const FeatureBox = ({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={`${
        index === 0
          ? "border-r"
          : index === 1
          ? "border-b"
          : index === 2
          ? "border-t"
          : index === 3
          ? "border-l"
          : "border"
      } py-2 px-5`}
    >
      <h3 className="font-medium text-lg my-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Product = ({ product }: { product: ProductInterface }) => {
  return (
    <div className="md:block md:text-left flex flex-col items-center text-center">
      {/* Logo */}
      <div className="w-36">
        <img src={SERVER_URL + product?.productImage} alt="logo" />
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        {/* Details and Features */}
        <div className="order-2 md:order-none">
          {/* details */}
          <p className="md:text-xl text-md font-medium px-5">
            {product?.productDetails}
          </p>
          {/* feature */}
          <div className="hidden md:grid grid-cols-2 my-5">
            {product?.productFeatures.map((feature, index) => (
              <FeatureBox
                key={index}
                index={index}
                title={feature?.title}
                description={feature?.description}
              />
            ))}
          </div>
        </div>
        {/* Product Image */}
        <div className="md:w-[1000px] w-[400px] order-1 md:order-none">
          <img src={SERVER_URL + product?.productPreview} alt="preview" />
        </div>
      </div>
      {/* Link */}
      <div className="flex items-center justify-center">
        <a href="/">
          <span className="text-[#7DB434] flex items-center gap-3">
            View Site
            <div className="bg-[#7DB434] rounded-full w-5 h-5 flex items-center justify-center">
              <IoArrowUp className="rotate-45 text-white text-md" />
            </div>
          </span>
        </a>
      </div>
    </div>
  );
};

function Products() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState<ProductInterface>(
    DUMMY_DATA[0]
  );
  const [counter, setCounter] = useState(0);

  function handlePrevious() {
    if (counter < 0) {
      setCounter(products.length - 1);
    } else {
      const newCount = counter - 1;
      setCounter(newCount);
      setCurrentProduct(products[counter]);
    }
  }

  function handleNext() {
    if (counter >= products.length) {
      setCounter(0);
    } else {
      const newCount = counter + 1;
      setCounter(newCount);
      setCurrentProduct(products[counter]);
    }
  }

  async function fetchProduct() {
    const response = await fetch(`${SERVER_URL}/product`, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);

    setProducts(data.data);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    setCurrentProduct(products[0]);
  }, [products]);

  return (
    <div className="flex justify-center my-10">
      <div className="max-w-[1170px] w-full flex flex-col items-center">
        {/* Heading */}
        <div className="text-center p-5 md:p-0">
          <h1 className="md:text-3xl text-2xl font-bold my-5">
            Tailor-made enterprise solutions for your brand
          </h1>
          <p className="font-medium">
            Powering Disruptive brands across 40+ industries
          </p>
        </div>

        {/* Products */}
        <div className="flex items-center justify-center">
          <div
            className="hidden md:flex bg-[#7DB434] text-white rounded-full p-2 items-center justify-center cursor-pointer"
            onClick={handlePrevious}
          >
            <IoIosArrowBack />
          </div>

          <Product product={currentProduct} />

          <div
            className=" hidden md:block bg-[#7DB434] text-white rounded-full p-2 items-center justify-center cursor-pointer"
            onClick={handleNext}
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
