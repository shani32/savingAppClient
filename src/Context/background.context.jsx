import React, { useContext, useState } from "react";

const BackgroundContext = React.createContext(null);
const SetBackgroundContext = React.createContext(null);

export const useBackground = () => useContext(BackgroundContext);
export const useSetBackground = () => useContext(SetBackgroundContext);

export const BackgroundProvider = ({ children }) => {
  const [background, setBackground] = useState(
    "https://top-studio.co.il/wp-content/uploads/2021/02/2752334387_w640_h640_2752334387.jpg"
  );

  return (
    <BackgroundContext.Provider value={background}>
      <SetBackgroundContext.Provider value={setBackground}>
        {children}
      </SetBackgroundContext.Provider>
    </BackgroundContext.Provider>
  );
};
