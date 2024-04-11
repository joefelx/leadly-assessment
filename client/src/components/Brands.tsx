import AMUL from "../assets/amul.avif";
import BERGER from "../assets/berger.avif";
import DOW_MASTER from "../assets/dow_master.avif";
import MOMEAZE from "../assets/momeaze.avif";
import MYSTORE from "../assets/mystore.avif";
import SYNGENTA from "../assets/syngenta.avif";
import WHITES from "../assets/whites.avif";
import BRAND_AFTER from "../assets/brand-after.png";
import HEADING_BEFORE from "../assets/heading-before.png";

const BrandBox = ({ image, size }: { image: string; size: number }) => {
  return (
    <div className={`w-${size} rounded-md shadow-sm`}>
      <img src={image} alt={image} />
    </div>
  );
};

const Row = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

function Brands() {
  return (
    <div className="w-full md:h-[600px] h-auto flex justify-center bg-[#f9f9f9] rounded-tl-[100px] rounded-br-[100px]">
      <div className="max-w-[1170px] w-full md:flex justify-between items-center p-5 md:p-0">
        {/* Brands */}
        <div className="md:flex hidden items-center gap-4">
          {/* Row 1 */}
          <Row>
            <BrandBox size={36} image={AMUL} />
            <BrandBox size={36} image={SYNGENTA} />
          </Row>
          {/* Row 2 */}

          <Row>
            <BrandBox size={36} image={BERGER} />
            <BrandBox size={36} image={DOW_MASTER} />
            <BrandBox size={36} image={MYSTORE} />
          </Row>
          {/* Row 3 */}
          <Row>
            <BrandBox size={36} image={MOMEAZE} />
            <BrandBox size={36} image={WHITES} />
          </Row>
        </div>
        {/* Flow line */}
        <div className="md:block hidden">
          <img src={BRAND_AFTER} alt="" />
        </div>
        {/* Title and Description */}
        <div className="relative md:text-right text-center w-full">
          <h1 className="md:text-4xl text-2xl font-bold my-5">
            <span
              className="absolute bottom-[12rem]
          right-[18.5rem] md:bottom-[12rem] md:right-[22.5rem]"
            >
              <img
                className="md:w-10 w-6"
                src={HEADING_BEFORE}
                alt="three line"
              />
            </span>
            Empowering Brands <br />
            Across the Globe{" "}
          </h1>
          <p className="md:text-lg text-md font-medium">
            StoreHippo ecommerce platform builds extraordinary solutions to
            power brands across 15 countries and 30+ industries. Add your brand
            to the long list of brands that trust StoreHippo.
          </p>
        </div>

        <div className="p-5 md:hidden grid grid-cols-4 justify-center gap-4">
          <BrandBox size={32} image={AMUL} />
          <BrandBox size={32} image={SYNGENTA} />
          <BrandBox size={32} image={BERGER} />
          <BrandBox size={32} image={DOW_MASTER} />
          <BrandBox size={32} image={MYSTORE} />
          <BrandBox size={32} image={MOMEAZE} />
          <BrandBox size={32} image={WHITES} />
        </div>
      </div>
    </div>
  );
}

export default Brands;
