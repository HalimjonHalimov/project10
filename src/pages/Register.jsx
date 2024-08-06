import React, { useState } from "react";
import { DefaultInput, SimpleBanner, SubmitButton } from "../components";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandle = (e) => {
    setLoading(true);
    e.preventDefault();
    const userInfo = { email, password };
    console.log(userInfo);
    setLoading(false);
  };
  return (
    <div className="w-full h-auto">
      <SimpleBanner>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[60%] h-auto flex flex-col justify-center items-center gap-2 ">
            <div>Logo</div>
            <h2 className="w-64 text-center font-serif font-bold text-3xl text-slate-900">
              Let’s get ready to get planning
            </h2>
            <p className="w-full h-auto text-base text-center font-bold text-slate-700 ">
              Already have an account?{" "}
              <Link className=" text-blue-700" to={"/login"}>
                Sign in.
              </Link>
            </p>
            <form className="w-full h-auto flex flex-col gap-2 justify-center items-center">
              <DefaultInput
                state={email}
                setState={setEmail}
                id={"email"}
                type={"email"}
                title={"Email"}
                placeholder={"Enter your Email"}
              />
              <DefaultInput
                state={password}
                setState={setPassword}
                id={"password"}
                type={"password"}
                title={"Password"}
                placeholder={"Enter your Password"}
              />
              <SubmitButton
                type={"submit"}
                title={"Create account"}
                onClick={submitHandle}
              />
            </form>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-sm text-balance text-center text-slate-400">
                By creating an account you agree to{" "}
                <span className="underline">Joy's privacy</span> policy and{" "}
                <span className="underline">terms of service</span>.{" "}
                <span className="underline">CA Privacy Notice</span>.
              </p>
              <div className="w-full h-auto text-base text-center font-bold text-slate-700">
                Attending as a guest?{" "}
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
