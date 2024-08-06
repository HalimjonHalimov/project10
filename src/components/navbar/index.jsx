import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full h-auto flex justify-between items-center border border-rose-700">
      <div >Logo</div>
      <nav>
        <ul>
          <li className="w-full h-auto flex justify-start items-center gap-4">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/signin"}>Login</Link>
            <Link>
              <button type="button">Get start</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
