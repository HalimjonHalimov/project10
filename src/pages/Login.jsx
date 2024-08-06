import React from "react";
import { SimpleBanner } from "../components";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

export default function Login() {
  return (
    <div className="w-full h-auto">
      <SimpleBanner>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[60%] h-auto flex flex-col justify-center items-center gap-2 ">
            <div>Logo</div>
            <h2 className="text-center font-bold text-2xl text-slate-900">
              Log into Title
            </h2>
            <p className="text-base text-center font-normal ">
              Don't have an account?{" "}
              <Link className=" text-blue-700" to={"/singup"}>
                Create Account.
              </Link>
            </p>
            <form className="w-full h-auto flex flex-col gap-2 justify-center items-center">
              <div className="w-full h-auto">
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <div className="w-full h-auto flex items-center border border-gray-300 rounded-md p-2">
                  <FaEnvelope className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    id="email"
                    className="w-full h-auto flex-1 outline-none border-none focus:ring-0"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="w-full h-auto">
                <label
                  htmlFor="Password"
                  className="mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="w-full h-auto flex items-center border border-gray-300 rounded-md p-2">
                  <CiLock className="text-gray-500 mr-2" />
                  <input
                    type="Password"
                    id="Password"
                    className="w-full h-auto flex-1 outline-none border-none focus:ring-0"
                    placeholder="Enter your Password"
                  />
                </div>
              </div>
              <button className="w-full h-9 text-base font-medium text-white border border-[#32AB26] bg-[#32AB26] rounded-md hover:text-[#32AB26] hover:bg-white transition duration-150 ease-in-out">
                Create account
              </button>
            </form>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-sm text-center text-slate-400">
                By creating an account you agree to Joy's privacy policy and
                terms of service. CA Privacy Notice.
              </p>
              <div className="text-base text-center text-slate-700">
                Attending as a guest?
                <Link className=" text-blue-700" to={"/"}>
                  Find a Couple
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SimpleBanner>
    </div>
  );
}
