import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  componentDidMount() {}

  render() {
    const { name, address } = this.props;
    const { count } = this.state;
    return (
      <div className="font-semibold text-base">
        <h1 className="ml-5">count : {count}</h1>
        <button
          className="bg-pink-100 ml-5 p-1 my-4 mx-1 border-2 border-solid border-black"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <div className="w-[250px] bg-slate-200 h-[80px] ml-5 border-1 border-solid border-black">
          <h3>Name : {name}</h3>
          <h3>Addrss : {address}</h3>
          <h3>Contact : +91 5566777744</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
