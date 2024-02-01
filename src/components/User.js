import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  const { name, address } = props;
  return (
    <div className="user">
      <h3>count : {count}</h3>
      <h3>count1 : {count1}</h3>
      <h3>Name : {name}</h3>
      <h3>Addrss : {address}</h3>
      <h3>Contact : +91 5566777744</h3>
    </div>
  );
};

export default User;
