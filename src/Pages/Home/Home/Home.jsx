import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Showcase from "../ShoCase/Showcase";
import chefService from "../../../assets/home/chef-service.jpg";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Delicious Bites-Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Showcase 
      title="Pizza"
      chefsubHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      bgImage={chefService}
      centerbgColor="white"
      ></Showcase>
      <PopularMenu />
      <CallUs />
      <ChefRecommends />
      <FeaturedItem />
      <Testimonials />
    </div>
  );
};

export default Home;
