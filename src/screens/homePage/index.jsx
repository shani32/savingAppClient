import React, { useLayoutEffect } from "react";
import { useSetBackground } from "../../Context/background.context.jsx";
import Header from "./components/header/header.component.jsx";

const HomePage = () => {
  const setBackground = useSetBackground();

  useLayoutEffect(() => {
    setBackground("https://cdn.mindmajix.com/blog/images/tps-140920.png");
  }, []);
  return <Header />;
};

export default HomePage;
