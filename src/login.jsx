import axios from "axios";
import { useState } from "react";
import "./login.css";
import { useSetBackground } from "../src/Context/background.context";

export const Login = ({setIsLoggedIn}) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const setBackground = useSetBackground();

  useLayoutEffect(() => {
    setBackground(
      "https://www.only-numbers.com/wp-content/uploads/2016/12/shutterstock_368567249.jpg"
    );
  }, []);

  


  const onChangeHandle = ({ target }) => {
    const { name, value } = target;
    name === "email" && setUser({ ...user, email: value });
    name === "password" && setUser({ ...user, password: value });
  };

  const onClickHandel = () => {
    axios
      .post("https://savingappforbetterlife.herokuapp.com/api/v1/users/login", user)
      .then(({ data }) => {
        setIsLoggedIn(true)
        tokenToLocalStorage(data[2]);
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log("Error");
      });
  };

  const tokenToLocalStorage = (token) => {
    window.localStorage.setItem("token", token);
  };

  return (
    <div className="login-form">
      <div className="">
        <h2>Login</h2>
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
          Login
        </button>
      </div>
    </div>
  );
};
