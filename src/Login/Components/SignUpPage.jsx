import { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests

const SignUpPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://keek-server.vercel.app/api/influencer/register-email-influencer`, // Update with your actual endpoint
        formData
      );
      console.log(response.data); // Handle success (e.g., show a message or redirect)
    } catch (error) {
      console.error("There was an error registering the user:", error.response);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div>
      <div className="ml-11 mt-[19px]">
        <h1 className="">
          <span className="font-semibold text-[31px] text-[#384EDD]">
            Sign up |{" "}
          </span>
          <span className="text-[21px]">Influencer</span>
        </h1>
        <div className="mb-[16px] mt-2">
          <p className="text-[#8E9090]">
            Welcome to Keek, please enter your data to create your account.
          </p>
        </div>
        <div className="flex items-center gap-5 mb-[29px]">
          <button className="border relative h-[43px] py-[12px] px-[122px] rounded-lg flex items-center">
            <FcGoogle className="text-2xl mr-3 absolute left-1/3" />{" "}
            <span className="absolute left-1/2">Google</span>
          </button>
          <Link to={"/mobilesignup"}>
            <button className="border relative h-[43px] py-[12px] px-[122px] rounded-lg flex items-center">
              <FaMobileAlt className="text-2xl mr-3 absolute left-10 opacity-50" />
              <span className="absolute left-[80px]">Mobile number</span>
            </button>
          </Link>
        </div>
        <div className="flex items-center mb-[17px]">
          <hr className="w-1/2 text-[#B1B2B2] " />
          <span className="px-6 text-sm text-[#B1B2B2]">OR</span>
          <hr className="w-1/2 text-[#B1B2B2]" />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block">
                Name<span className="text-[#06F]">*</span>
              </label>
              <input
                className="border h-[44px] border-[#363939] px-5 py-3 w-[500px] rounded-lg"
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block">
                Email<span className="text-[#06F]">*</span>
              </label>
              <input
                className="border h-[44px]  border-[#363939] px-5 py-3 w-[500px] rounded-lg"
                type="email"
                name="email"
                id="email"
                placeholder="John.doe@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block">
                Password<span className="text-[#06F]">*</span>
              </label>
              <input
                className="border h-[44px]  border-[#363939] px-5 py-3 w-[500px] rounded-lg"
                type={showPass ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div
                onClick={() => setShowPass(!showPass)}
                className="absolute top-1/2 right-6 pl-3 flex items-center cursor-pointer"
              >
                {showPass ? (
                  <IoEyeOutline className="text-2xl opacity-50" />
                ) : (
                  <BsEyeSlash className="text-2xl opacity-50" />
                )}
              </div>
            </div>
            <div className="mb-[17px] mt-1.5 text-[#8E9090] text-sm">
              Must be at least 8 characters.
            </div>
            <div className="mb-[12px]">
              <input
                type="checkbox"
                name="terms"
                id="term"
                className="mr-2"
                required
              />
              <label htmlFor="term">
                I Agree to
                <span className="text-[#06F]">Terms & Condition</span>
              </label>
            </div>
            <div className="mb-[11px]">
              <button
                type="submit"
                className="w-full text-center text-white py-4 rounded-[10px] bg-[#0066FF]"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="mb-[21px]">
            <hr className="text-[#B1B2B2]" />
          </div>
          <div className="text-center mb-[21px]">
            Already Have an account? &nbsp;
            <Link to={"/"}>
              <span className="text-[#06F]">Login</span>
            </Link>
          </div>
          <div className="text-center">
            Want to Sign up as a creator? &nbsp;
            <a href="https://keek-client.vercel.app/">
              <span className="text-[#06F]">
                Brand page
                <RiArrowRightUpLine className="inline-block text-lg text-[#06F]" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
