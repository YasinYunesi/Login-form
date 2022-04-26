// UI
import image from "../assets/3.png";
import Form from "../components/Form";

const SignUpScreen = () => {
  return (
    <div className="grid grid-flow-col grid-cols-3">
      <img src={image} alt="background" />

      {/* The form (right side) */}
      <Form type="signUp" />
    </div>
  );
};

export default SignUpScreen;
