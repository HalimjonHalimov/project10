import React from "react";
import { Link } from "react-router-dom";
import Container from "../container";
import SimpleButton from "../button/simplebtn";
// 32AB26
// FEF9F5
export default function Navbar() {
  return (
    <div className="w-full h-auto  bg-[#32AB26]/10">
      <Container>
        <div className="w-full h-auto py-2 flex justify-between items-center">
          <div>Logo</div>
          <nav>
            <ul className="w-full h-auto flex justify-start items-center gap-4">
              <li>
                <Link
                  className="px-4 py-2 text-base font-medium  text-slate-500 hover:text-[#32AB26] transition duration-150 ease-in-out"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-2 text-base font-medium  text-slate-500 hover:text-[#32AB26] transition duration-150 ease-in-out"
                  to={"/about"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-2 text-base font-medium  text-slate-500 hover:text-[#32AB26] transition duration-150 ease-in-out"
                  to={"/services"}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-2 text-base font-medium  text-slate-500 hover:text-[#32AB26] transition duration-150 ease-in-out"
                  to={"/login"}
                >
                  Login
                </Link>
              </li>
              <SimpleButton title={"Get started"} />
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
}
