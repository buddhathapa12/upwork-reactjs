import React from "react";
import axios from "axios";
import { useState } from "react";
const Home = () => {
  const [data, setData] = useState("");
  //const {} = use;
  const handleChange = (event) => {
    // console.log(event);
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(data);
    axios
      .post("https://whispering-forest-38899.herokuapp.com/", {
        name: data,
      })
      .then((res) => {
        if (res.status === 201) {
          alert("Successfully created");
          setData("");
        } else {
          alert("Somthing went wrong");
        }
        //console.log(res);
      });
  };
  return (
    <div className="App">
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type="text" value={data} onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Home;
