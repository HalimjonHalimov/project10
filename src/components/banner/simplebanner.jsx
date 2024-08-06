import React from "react";
import Container from "../container";
import image from "../../assets/images/image.webp";

export default function Simplebanner({ children }) {
  return (
    <div className="w-full h-auto">
      <Container>
        <div className="w-full h-auto grid grid-cols-2 gap-2 ">
          <div className="w-full h-[90vh] flex flex-col justify-center items-center gap-2 bg-[#32AB26]/10">
            <div className="w-96 h-auto text-2xl text-balance font-normal text-slate-500">
              Join over one million happy couples who planned their wedding with
              Joy.
            </div>
            <div className="w-96 h-72 relative rounded-md overflow-hidden">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover  shadow-lg"
                src={image}
                alt="Description of the image"
              />
            </div>
          </div>
          <div className="w-full h-full">{children}</div>
        </div>
      </Container>
    </div>
  );
}
