// UI
import image from "../assets/1.png";
import image2 from "../assets/2.jpg";
import Content from "../components/Content";

const SignUpScreen = () => {
  return (
    <>
      <img className="lg:hidden" src={image2} alt="background" />
      <div className="grid grid-flow-col grid-cols-2 lg:grid-cols-3 h-full">
        <img className="lg:col-span-1 h-full hidden lg:block" src={image} alt="background" />

        {/* The form (right side) */}
        <Content type="signUp" />
      </div>
    </>
  );
};

export default SignUpScreen;
