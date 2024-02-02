import { RestaurantCard, WithLabelPromoted } from "./RestaurantCard";

import { useState, useEffect, useContext } from "react";

import { Shimmer } from "./Shimmer";

import { Shimmer2 } from "./Shimmer";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_LIST_API } from "../utils/Constants";

import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const RestaurantCardPromoted = WithLabelPromoted(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_API);

    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return (
      <h1>
        Looks like you are offline !! , please check your internet connection
      </h1>
    );

  const ShimmerCondition = () => {
    return (
      <div className="shimmer-condition-div">
        <Shimmer2 />
        <Shimmer />
      </div>
    );
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    ShimmerCondition()
  ) : (
    <div className="bg-blue-[150]">
      <div className="filter">
        <div className="search">
          <input
            data-testid="searchInput"
            type="text"
            name="text"
            placeholder="  search restaurants"
            className="relative inset-x-[35%] w-[300px] bg-pink-100 p-1 my-4 mx-1 border-2 border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          />
          <button
            className="relative inset-x-[35%] border-2 px-1 py-1 bg-yellow-400 border-solid border-black"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="relative inset-y-[-77px] inset-x-[1150px] m-4 p-4 flex items-center">
          <label className="font-semibold ">UserName </label>
          <input
            className="rounded-lg ml-2 border border-blue-600 p-2 font-bold "
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          ></input>
        </div>

        <button
          className="relative inset-x-7 border-2 px-3 py-3 bg-blue-300 border-solid border-black"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
