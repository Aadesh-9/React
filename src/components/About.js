import { Component } from "react";
import UserClass from "./User-class";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="bg-green-100 w-[400px] h-[290px] mt-5 ml-5 border-2 border-solid border-black">
        <h1 className="font-bold text-xl p-2 ml-3">
          This is food ordering website
        </h1>
        <div className="relative inset-x-6">
          <p className="font-semibold">loggedIn User</p>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className=" text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Aadesh Wasamkar"} address={"Pune,India"} />
      </div>
    );
  }
}

export default About;
