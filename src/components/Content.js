// React router
import { Link } from "react-router-dom";

// Components
import Form from "./Form";

// Icons
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Content = ({ type }) => {
  // JSX //////////////////////////////////
  return (
    <div className="col-span-2 flex flex-col justify-around px-10 pt-12 md:px-16 3xl:px-32 3xl:pt-24">
      <div className="">
        {/* Sign up Link */}
        <div className="text-right">
          <Link
            to={type === "signUp" ? "/log-in" : "/"}
            className="text-lg font-medium inline-block text-gray-400 transition-all duration-300 hover:text-gray-300"
          >
            {type === "signUp" ? "Log in" : "Sign up"}
          </Link>
        </div>

        {/* Text & the form */}
        <div className="lg:grid lg:grid-cols-2 pt-12 2xl:pt-20 3xl:pt-28">
          {/* Welcome text */}
          <div className="h-full my-auto">
            <h1 className="text-lg text-center lg:text-left">{type === "signUp" ? "welcome" : "welcome back"}</h1>
            {type === "signUp" ? (
              <h1 className="welcome_text">
                Fill the form <br className="hidden lg:inline" /> to become <br className="hidden lg:inline" /> a part of{" "}
                <br className="hidden lg:inline" /> our community
              </h1>
            ) : (
              <h1 className="welcome_text">
                Log in to <br className="hidden lg:inline" /> see what <br className="hidden lg:inline" /> the comunity's{" "}
                <br className="hidden lg:inline" /> been up to
              </h1>
            )}
          </div>

          {/* The form */}
          <Form type={type} />
        </div>
      </div>

      {/* Social media links */}
      <div className={`lg:grid_flow_col_2 w-full h-fit ${type === "signUp" ? "py-10 2xl:py-14" : "py-10 2xl:pt-36"}`}>
        <h1 className="text-gray-400 my-auto hidden lg:block">Social networks</h1>
        <div className="flex justify-center lg:justify-start col-start-2">
          <a className="social_btn hover:bg-telegram" href="https://telegram.me/yasin1999" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
          <a
            className="social_btn hover:bg-instagram"
            href="https://www.instagram.com/yasin12_80"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
          <a
            className="social_btn hover:bg-linkedin"
            href="https://www.linkedin.com/in/yasin-yunesi-010921230/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a className="social_btn hover:bg-github" href="https://github.com/YasinYunesi" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
