import { LOGO_URL } from "../utils/Constants";

import { useContext, useState } from "react";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const [loginButton, setLoginButton] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between border-2 border-solid border-black bg-gray-200">
      <div className="w-[200px] p-2 m-4">
        <img
          className="w-[170px] rounded-[50%]"
          src={LOGO_URL}
          alt="This is logo"
        ></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-3 mx-10 ">
          <li className="font-semibold text-xl ml-10">
            Internet Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="font-semibold text-xl ml-10">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold text-xl ml-10">
            <Link to="/About">About Us</Link>
          </li>
          <li className="font-semibold text-xl ml-10">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="font-semibold text-xl ml-10">
            <Link to="/Cart"> Cart ➡️ {cartItems.length} </Link>
          </li>
          <li className="font-semibold text-xl ml-10">
            <button
              className="font-semibold text-xl  px-1 bg-green-400 border-2 border-solid border-black"
              onClick={() => {
                loginButton === "Login"
                  ? setLoginButton("Logout")
                  : setLoginButton("Login");
              }}
            >
              {loginButton}
            </button>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
