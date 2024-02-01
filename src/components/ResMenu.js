import useRestaurantMenu from "../utils/useRestaurantMenu";
import { Shimmer, Shimmer2 } from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const ResMenu = () => {
  const [showIndex, setShowIndex] = useState([]);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null)
    return (
      <div>
        <Shimmer2 /> <Shimmer />
      </div>
    );

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategories
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ResMenu;
