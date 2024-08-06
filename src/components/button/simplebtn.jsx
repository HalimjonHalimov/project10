import React from "react";
import { Link } from "react-router-dom";

export default function SimpleButton({ title }) {
  return (
    <Link className="w-36 h-9 bg-[#32AB26] flex justify-center items-center rounded text-slate-200 font-medium border border-[#32AB26] hover:bg-slate-200 hover:text-[#32AB26] transition duration-150 ease-in-out">
      <button
        type="button"
        className="block bg-none outline-none border-none capitalize"
      >
        {title}
      </button>
    </Link>
  );
}
