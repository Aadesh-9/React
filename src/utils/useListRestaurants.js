import { useEffect, useState } from "react";
import { RES_LIST_API } from "./Constants";

const useListRestaurants = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RES_LIST_API);
    const json = await data.json();
    setRestaurantsList(json.data);
  };
  return restaurantsList;
};

export default useListRestaurants;
