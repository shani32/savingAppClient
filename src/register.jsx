import axios from "axios";
import { useState } from "react";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandle = ({ target }) => {
    const { name, value } = target;
    name === "name" && setUser({ ...user, name: value });
    name === "email" && setUser({ ...user, email: value });
    name === "password" && setUser({ ...user, password: value });
  };

  const onClickHandel = async ()=>{
    axios
    .post("https://savingappforbetterlife.herokuapp.com/api/v1/users/add", user)
    .then(({ data }) => {
      console.log("registerd");
      window.localStorage.setItem("token", data.token);
    })
    .catch((error) => {
      console.log(error.response.data);
      console.log("Error");
    });
  }
  return (
    <>
      <div className="">
        <h2>Register</h2>
        <div className="">
          <input
            onChange={onChangeHandle}
            name="name"
            value={user.name}
            placeholder="Enter full name"
          ></input>
        </div>
        <div className="">
          <input
            onChange={onChangeHandle}
            name="email"
            value={user.email}
            placeholder="Enter email"
          ></input>
        </div>
        <div className="">
          <input
            onChange={onChangeHandle}
            name="password"
            type="password"
            value={user.password}
            placeholder="Enter password"
          ></input>
        </div>
        <button className="" onClick={onClickHandel}>
          Register
        </button>
      </div>
    </>
  );
};
