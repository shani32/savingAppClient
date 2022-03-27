import React, { useLayoutEffect, useReducer } from "react";
import "./register.styles.css";
import axios from "axios";
import { useSetBackground } from "../../Context/background.context";

const INPUT_ATTR = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    className: "register-input-field",
    id: "register-email-input",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    className: "register-input-field",
    id: "register-password-input",
  },
  {
    name: "name",
    type: "text",
    placeholder: "User Name",
    className: "register-input-field",
    id: "register-name-input",
  },
];

const Input = ({ ...attr }) => {
  return <input {...attr} />;
};

const INITIAL_STATE = {
  email: "",
  password: "",
  name: "",
};

const inputReducer = (state, action) => {
  switch (action.name) {
    case "email":
      return { ...state, [action.name]: action.payload };
    case "password":
      return { ...state, [action.name]: action.payload };
    case "name":
      return { ...state, [action.name]: action.payload };
    default:
      return state;
  }
};

const Register = () => {
  const [inputsVal, dispatch] = useReducer(inputReducer, INITIAL_STATE);


  const setBackground = useSetBackground();

  useLayoutEffect(() => {
    setBackground("https://s37564.pcdn.co/wp-content/uploads/2016/11/salaries-31116-scaled.jpeg.optimal.jpeg");
  }, []);

  const onClickHandel = (e) => {
    e.preventDefault();
    console.log(inputsVal);
    axios
      .post("https://savingappforbetterlife.herokuapp.com/api/v1/users/add", inputsVal)
      .then(({ data }) => {
        console.log("register successfully", data);
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log("Error");
      });
  };

  const handleInput = ({ target: { value, name } }) =>
    dispatch({ name, payload: value });
  return (
    <div className="register-container">
      <header className="register-header-container">
        <h1 className="register-header-content">Register Page</h1>
      </header>
      <form className="register-form">
        <div className="register-paper">
          {INPUT_ATTR.map((attr, index) => (
            <Input key={index} {...attr} onChange={handleInput} />
          ))}
        </div>
        <div className="register-submit-button-container">
          <button onClick={onClickHandel} className="register-submit-button">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
