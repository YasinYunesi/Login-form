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
        <Link to="/" className="text-lg font-medium inline-block text-gray-400 transition-all duration-300 hover:text-gray-300">
          {type === "signUp" ? "Log in" : "Sign up"}
        </Link>
      </div>

      <div className="grid grid-cols-2 pt-28">
        {/* Welcome text */}
        <div className="h-full my-auto">
          <h1 className="text-lg">welcome</h1>
          <h1 className="mt-6 text-4xl font-bold tracking-wide">
            Fill the form <br /> to become <br /> a part of <br /> our community
          </h1>
        </div>

        {/* The form */}
        <form className="row-span-1 h-fit pb-32 border-b border-b-gray-500">
          <div className="relative mb-10 rounded-lg">
            <span className="absolute top-0 bottom-0 right-0 pr-3 text-xl text-gray-400 flex items-center z-10">
              <AiOutlineUser />
            </span>
            <input
              className="bg-light_dark border border-dark_gray p-5 rounded-lg w-full text-lg placeholder:text-base focus:outline-none focus:brightness-110 hover:brightness-110 transition ease-linear duration-150"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="relative mb-10 rounded-lg">
            <span className="absolute top-0 bottom-0 right-0 pr-3 text-xl text-gray-400 flex items-center z-10">
              <AiOutlineMail />
            </span>
            <input
              className="bg-light_dark border border-dark_gray p-5 rounded-lg w-full text-lg placeholder:text-base focus:outline-none focus:brightness-110 hover:brightness-110 transition ease-linear duration-150"
              type="email"
              placeholder="E-mail"
            />
          </div>
          <div className="relative rounded-lg">
            <button
              className="absolute top-0 bottom-0 right-0 pr-3 text-xl text-gray-400 flex items-center z-10"
              onClick={() => setHiddenPass(!hiddenPass)}
              type="button"
            >
              {hiddenPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
            <input
              className="bg-light_dark border border-dark_gray p-5 rounded-lg w-full text-lg placeholder:text-base focus:outline-none focus:brightness-110 hover:brightness-110 transition ease-linear duration-150"
              type={hiddenPass ? "password" : "text"}
              placeholder="Password"
            />
          </div>

          <div className="mt-16 grid grid-flow-col grid-cols-2">
            {/* Submit btn */}
            <div className="col-start-1">
              <button
                className="bg-light_yellow text-gray-700 rounded-xl px-20 py-4 font-semibold text-lg transition-all duration-200 hover:rounded-lg"
                type="submit"
              >
                Sign up
              </button>
            </div>
            {/* Already a member */}
            <div className="col-start-2">
              <h1 className="text-right text-gray-400">
                Already a memeber of the community?{" "}
                <Link
                  to="/log-in"
                  className="text-light_yellow underline brightness-90 transition-all duration-150 hover:brightness-105"
                >
                  Log in
                </Link>
              </h1>
            </div>
          </div>
        </form>
      </div>

      {/* Social media links */}
      <div className="grid grid-flow-col grid-cols-2 w-full pt-16">
        <h1 className="text-gray-400 my-auto">Social networks</h1>
        <div className="flex justify-start col-start-2">
          <a
            className="rounded-full bg-neutral-400 text-light_dark text-2xl p-5 mr-5 transition-all duration-200 hover:bg-telegram hover:text-white"
            href="https://telegram.me/yasin1999"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegramPlane />
          </a>
          <a
            className="rounded-full bg-neutral-400 text-light_dark text-2xl p-5 mr-5 transition-all duration-200 hover:bg-instagram hover:text-white"
            href="https://www.instagram.com/yasin12_80"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
          <a
            className="rounded-full bg-neutral-400 text-light_dark text-2xl p-5 mr-5 transition-all duration-200 hover:bg-linkedin hover:text-white"
            href="https://www.linkedin.com/in/yasin-yunesi-010921230/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="rounded-full bg-neutral-400 text-light_dark text-2xl p-5 mr-5 transition-all duration-200 hover:bg-github hover:text-white"
            href="https://github.com/YasinYunesi"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
