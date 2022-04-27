// UI
import image from "../assets/3.png";
import Form from "./../components/Form";

const LogInScreen = () => {
  return (
    <div className="grid grid-flow-col grid-cols-3">
      <img className="h-screen" src={image} alt="background" />

      {/* The form (right side) */}
      <Form type="logIn" />
    </div>
  );
};

export default LogInScreen;
