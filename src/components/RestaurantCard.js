import { CDN_URL } from "../utils/Constants";

export const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    aggregatedDiscountInfoV3,
  } = resData?.info;

  let a;

  aggregatedDiscountInfoV3 === undefined
    ? (a = "")
    : (a = aggregatedDiscountInfoV3.header);

  let b;

  aggregatedDiscountInfoV3?.subHeader === undefined
    ? (b = "")
    : (b = aggregatedDiscountInfoV3.subHeader);

  const { deliveryTime } = resData?.info.sla;

  return (
    <div className=" p-4 w-[220px] m-4  bg-gray-200">
      <img
        className="w-[190px] h-32 mb-1 rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h2 className=" text-red-500 font-semibold text-xl">{a + b}</h2>
      <h3 className="font-bold text-base py-2">{name}</h3>
      <h4 className="font-medium">{cuisines.join(" , ")}</h4>
      <h4 className="font-medium">{deliveryTime} minutes</h4>
      <h4 className="font-medium">{costForTwo}</h4>
      <h4 className="font-medium">&#11088; {avgRating}</h4>
    </div>
  );
};

export const WithLabelPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
