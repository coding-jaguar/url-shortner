"use client";

import { useScroll } from "../contexts/ScrollContext";

const BoostLinks = () => {
  const { sectionRef } = useScroll();

  const handleButtonClick = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" bg-shorten-desktop bg-veryDarkBlue bg-cover mx-20 flex flex-col justify-center items-center p-8">
      <div className="text-white text-4xl mt-10">Boost Your Links Today!!</div>

      <button
        className="bg-cyan rounded-full w-fit px-10 py-4 m-5 mt-10 text-xl text-white"
        onClick={handleButtonClick}
      >
        Get Started
      </button>
    </div>
  );
};

export default BoostLinks;
