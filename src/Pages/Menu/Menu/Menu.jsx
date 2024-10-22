import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/UseMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

// Importing background images dynamically
import menuBg from "../../../assets/menu/banner3.jpg";
import desertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import LoadingSpiner from "../../../components/LoadingSpiner/LoadingSpiner";

const Menu = () => {
  const [menu, menuLoading] = useMenu();

  const categories = [
    {
      title: "offered",
      bgImg: menuBg,
      description: "Explore today’s special dishes crafted just for you.",
    },
    {
      title: "dessert",
      bgImg: desertBg,
      description: "Indulge in sweet treats and classic desserts.",
    },
    {
      title: "pizza",
      bgImg: pizzaBg,
      description: "Try our delicious range of freshly baked pizzas.",
    },
    {
      title: "salad",
      bgImg: saladBg,
      description: "Enjoy a healthy selection of fresh and vibrant salads.",
    },
    {
      title: "soup",
      bgImg: soupBg,
      description: "Warm yourself with our hearty and flavorful soups.",
    },
  ];

  if (menuLoading) {
    return <LoadingSpiner></LoadingSpiner>;
  }

  // Dynamically filtering menu items for each category
  const filteredMenu = (category) =>
    menu.filter((item) => item.category === category);

  return (
    <div>
      <Helmet>
        <title>Delicious Bites- Menu</title>
      </Helmet>

      {/* Main cover */}
      <Cover
        coverImg={menuBg}
        title={"Our Menu"}
        paragraph={"WOULD YOU LIKE TO TRY A DISH?"}
      />

      <SectionTitle subHeading={"Don't Miss"} heading={"TODAY'S OFFER"} />

      {/* Dynamic rendering of categories */}
      {categories.map(({ title, bgImg, description }) => (
        <MenuCategory
          key={title}
          coverImg={bgImg}
          items={filteredMenu(title)}
          title={title}
          paragraph={description}
        />
      ))}
    </div>
  );
};

export default Menu;


