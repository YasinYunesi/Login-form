// React
import { useState } from "react";

// React router
import { Link } from "react-router-dom";

// UI
import { AiOutlineUser, AiOutlineMail, AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Form = () => {
  const [hiddenPass, setHiddenPass] = useState(true);

  // JSX ///////////////////////////////
  return (
    <form className="h-fit pb-4 xl:pb-0 pt-10 lg:pt-0 border-b border-b-gray-500">
      <div className="relative mb-8 2xl:mb-10 rounded-lg">
        <span className="input_icon">
          <AiOutlineUser />
        </span>
        <input className="form_input" type="text" placeholder="Name" />
      </div>
      <div className="relative mb-8 2xl:mb-10 rounded-lg">
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

      {/* Btn & Link */}
      <div className="mt-12 grid_flow_2">
        {/* Submit btn */}
        <div className="row-start-1 mx-auto xl:col-start-1 mb-3 xl:mb-0">
          <button
            className="bg-light_yellow text-gray-700 rounded-xl px-12 py-3 2xl:px-18 2xl:py-4 font-semibold text-lg transition_150 hover:rounded-lg"
            type="submit"
          >
            Sign up
          </button>
        </div>
        {/* Already a member */}
        <div className="row-start-2 xl:row-start-1 xl:col-start-2 my-auto">
          <h1 className="text-center xl:text-right text-gray-400">
            Already a memeber of the community?{" "}
            <Link to="/sign-up" className="text-light_yellow underline brightness-90 transition_150 hover:brightness-105">
              Log in
            </Link>
          </h1>
        </div>
      </div>
    </form>
  );
};

export default Form;
