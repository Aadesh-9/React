const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-xl p-4 m-4">
        This is contact page of Our webapp
      </h1>
      <form>
        <label className="ml-4" for="name">
          Name :{" "}
        </label>
        <input
          type="text"
          className="p-2 m-2 border border-black"
          placeholder="Enter your name"
          id="name"
        />
        <label className="ml-4" for="message">
          message :{" "}
        </label>
        <input
          type="text"
          className="p-2 m-2 border border-black"
          placeholder="Enter your message"
          id="message"
        />
        <button className="p-2 m-2 border border-black text-white bg-black rounded-lg">
          Contact Now
        </button>
      </form>
    </div>
  );
};

export default Contact;
