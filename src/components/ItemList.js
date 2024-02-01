import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import { CDN_URL } from "../utils/Constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          {/* {console.log("item")}
          {console.log(item?.card?.info?.name)} */}
          <div className="w-9/12 ">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <br></br>
              <span>
                {" "}
                ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="relative inset-x-24 inset-y-[-30px] p-2 mx-16 rounded bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
          <img
            className="w-48 h-28"
            src={CDN_URL + item?.card?.info?.imageId}
          ></img>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
