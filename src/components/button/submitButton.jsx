import React from "react";

export default function SubmitButton({ type, title, onClick, loading }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full h-9 text-base font-medium text-white border border-[#32AB26] bg-[#32AB26] rounded-md hover:text-[#32AB26] hover:bg-white transition duration-150 ease-in-out"
    >
      {loading === true ? "Loading..." : title}
    </button>
  );
}
