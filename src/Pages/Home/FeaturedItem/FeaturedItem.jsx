import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./FeaturedItem.css";
import AddToCart from "../../../components/Buttons/AddtoCart/AddToCart.jsx";
const FeaturedItem = () => {
  return (
    // <div className="mt-20  featured-item bg-fixed  py-24 px-10 text-white ">
    //   <div className="backdrop-blur-3xl rounded-xl">
    //     <SectionTitle
    //       subHeading={"---Check it out---"}
    //       heading={"Featured Item"}
    //     ></SectionTitle>
    //     <div className="lg:flex space-y-4 justify-center items-center  gap-8 lg:px-20">
    //       <div className="">
    //         <img src={featuredImg} alt="" />
    //       </div>
    //       <div className="p-12 rounded-xl">
    //         <p>March 20, 2023</p>
    //         <h5 className="uppercase text-black font-black text-2xl">
    //           Discover the Culinary Secrets
    //         </h5>
    //         <p className="mb-4 text-black font-semibold text-xl">
    //           Embark on a journey of flavor and tradition, where every dish is
    //           crafted with passion and precision. From farm-fresh ingredients to
    //           the artistry of our chefs, this is where unforgettable dining
    //           experiences begin. Indulge in the essence of culinary perfection
    //           today.
    //         </p>
    //         <button
    //           className="uppercase py-2"
    //           style={{ borderBottom: "3px solid #ffffff", borderRadius: "8px" }}
    //         >
    //           Read More
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

<div className="relative py-12 my-12">
      <div className="absolute top-0 left-0 w-full h-full -z-0 brightness-75">
        <img
          src={featuredImg}
          alt="Featured_Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-white">
        <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />

        <div className="md:py-12 flex items-center justify-center gap-8 px-4 md:px-16 lg:px-28 xl:px-48 flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={featuredImg}
              className="w-full h-auto object-cover"
              alt="Featured Image"
            />
          </div>
          <div className="w-full md:w-1/2 text-white space-y-4 p-4">
            <h1 className="text-xl md:text-2xl">March 20, 2023</h1>
            <h2 className="text-2xl md:text-3xl font-bold">
              WHERE CAN I GET SOME?
            </h2>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <AddToCart btntext="Order Now"></AddToCart>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default FeaturedItem;

