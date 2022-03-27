import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const UserAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && location.pathname !== "/register") navigate("/login");
  }, []);

  return(
    <Outlet />
  )

}

export default UserAuth;
