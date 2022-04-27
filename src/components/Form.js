// React
import { useState } from "react";

// React router
import { Link } from "react-router-dom";

// Icons
import { AiOutlineUser, AiOutlineMail, AiOutlineEyeInvisible, AiOutlineEye, AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Form = ({ type }) => {
  const [hiddenPass, setHiddenPass] = useState(true);

  // JSX //////////////////////////////////
  return (
    <div className="col-span-2 px-36 py-24">
      {/* Sign up Link */}
      <div className="text-right">
        <Link
          to={type === "signUp" ? "/log-in" : "/"}
          className="text-lg font-medium inline-block text-gray-400 transition-all duration-300 hover:text-gray-300"
        >
          {type === "signUp" ? "Log in" : "Sign up"}
        </Link>
      </div>

      <div className="grid grid-cols-2 pt-28">
        {/* Welcome text */}
        <div className="h-full my-auto">
          <h1 className="text-lg">{type === "signUp" ? "welcome" : "welcome back"}</h1>
          {type === "signUp" ? (
            <h1 className="welcome_text">
              Fill the form <br /> to become <br /> a part of <br /> our community
            </h1>
          ) : (
            <h1 className="welcome_text">
              Log in to <br /> see what <br /> the comunity's <br /> been up to
            </h1>
          )}
        </div>

        {/* The form */}
        <form className="row-span-1 h-fit pb-32 border-b border-b-gray-500">
          {type === "signUp" ? (
            <div className="relative mb-10 rounded-lg">
              <span className="input_icon">
                <AiOutlineUser />
              </span>
              <input className="form_input" type="text" placeholder="Name" />
            </div>
          ) : null}
          <div className="relative mb-10 rounded-lg">
            <span className="input_icon">
              <AiOutlineMail />
            </span>
            <input className="form_input" type="email" placeholder="E-mail" />
          </div>
          <div className="relative rounded-lg">
            <button className="input_icon" onClick={() => setHiddenPass(!hiddenPass)} type="button">
              {hiddenPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
            <input className="form_input" type={hiddenPass ? "password" : "text"} placeholder="Password" />
          </div>

          <div className="mt-16 grid_flow_col_2">
            {/* Submit btn */}
            <div className="col-start-1">
              <button
                className="bg-light_yellow text-gray-700 rounded-xl px-20 py-4 font-semibold text-lg transition_150 hover:rounded-lg"
                type="submit"
              >
                {type === "signUp" ? "Sign up" : "Log in"}
              </button>
            </div>
            {/* Already a member */}
            <div className="col-start-2">
              <h1 className="text-right text-gray-400">
                {type === "signUp" ? "Already a memeber of the community?" : "Not a memeber of the community?"}{" "}
                <Link
                  to={type === "signUp" ? "/log-in" : "/"}
                  className="text-light_yellow underline brightness-90 transition_150 hover:brightness-105"
                >
                  {type === "signUp" ? "Log in" : "sign up"}
                </Link>
              </h1>
            </div>
          </div>
        </form>
      </div>

      {/* Social media links */}
      <div className={`grid_flow_col_2 w-full ${type === "signUp" ? "pt-16" : "pt-40"}`}>
        <h1 className="text-gray-400 my-auto">Social networks</h1>
        <div className="flex justify-start col-start-2">
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

export default Form;
