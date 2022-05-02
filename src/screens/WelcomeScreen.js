// React
import { useContext } from "react";
// Context API
import { AppContext } from "../Context";

const WelcomeScreen = () => {
  const { user } = useContext(AppContext);

  console.log(user);

  // JSX /////////////////////////////
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
    </div>
  );
};

export default WelcomeScreen;
