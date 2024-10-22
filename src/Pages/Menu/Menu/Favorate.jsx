import MenuItem from "../../../Home/Home/Shared/MenuItem/MenuItem";
import ItemShocase from "../../../Home/Home/Shared/Chef-Show/ItemShocase";
import { Link } from "react-router-dom";
import AddToCart from "../../../components/Buttons/AddtoCart/AddToCart";

function Favorite({ items, title, bgImage }) {
  const addToCartItem = () => {
    console.log("card added");
  };
  return (
    <div className="max-w-screen-xl mx-auto my-12 px-2 flex flex-col items-center gap-12">
      {title && <ItemShocase bgImage={bgImage} title={title}></ItemShocase>}
      <div className="space-y-8 grid md:grid-cols-2 gap-4">
        {items.map((items) => (
          <MenuItem key={items._id} items={items}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <AddToCart
          bgColor="white"
          textColor="black"
          btntext="ORDER YOUR FAVOURITE FOOD"
          borderBottom="black"
          addToCartItem={addToCartItem}
        ></AddToCart>
      </Link>
    </div>
  );
}

export default Favorite;
