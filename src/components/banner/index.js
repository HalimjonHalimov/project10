import React from "react";
import video from "../../assets/videos/background.mp4";
import Container from "../container";
import SimpleButton from "../button/simplebtn";

export default function Banner({ children }) {
  return (
    <div className="w-full h-[90vh]">
      <div className="w-full h-full relative">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full top-0 left-0 object-cover -z-0"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <Container>
            <div className="w-full h-auto p-8 flex flex-col justify-center items-center gap-4 rounded-md text-white capitalize bg-white inset-0 bg-opacity-10 backdrop-blur-sm">
              <h2 className="font-semibold text-2xl">Event App/Web</h2>
              <p className="font-normal text-base text-center">
                Streamline your events with our comprehensive event management
                app. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate officiis saepe aperiam animi ipsa maiores quis
                expedita possimus architecto consequuntur facere hic quae,
                libero nesciunt similique. Nesciunt doloribus amet a.
              </p>
              <SimpleButton title={"view services"} />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
