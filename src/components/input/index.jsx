import React from "react";
import { CiLock } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

export default function DefaultInput({
  state,
  setState,
  id,
  type,
  title,
  placeholder,
}) {
  return (
    <div className="w-full h-auto">
      {title && (
        <label htmlFor={id} className="mb-2 text-sm font-medium text-gray-900">
          {title}
        </label>
      )}
      <div className="w-full h-auto flex items-center border border-gray-300 rounded-md p-2">
        {type !== "password" ? (
          <TfiEmail className="text-gray-500 mr-2" />
        ) : (
          <CiLock className="text-gray-500 mr-2" />
        )}

        <input
          type={type}
          id={id}
          name={id}
          className="w-full h-auto flex-1 outline-none border-none focus:ring-0"
          placeholder={placeholder}
          required
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </div>
  );
}
