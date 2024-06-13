import Image from "next/image";
import image from "../givenstuff/images/illustration-working.svg";
const Introduction = () => {
  return (
    <div className="flex justify-between mt-5 pl-24">
      <div className="ml-5 p-8">
        <div className="text-veryDarkVoilet font-bold text-7xl">
          More than just shorter links
        </div>
        <div className="text-gray text-3xl p-3">
          build your brand&apos;s recognition and get detailed insights on how
          your links are performing
        </div>
        <button className="mt-10 text-3xl bg-cyan px-8 py-5 text-white rounded-full">
          Get Started
        </button>
      </div>
      <Image
        src={image}
        alt="lady on desktop"
        width={1000}
        height={600}
      ></Image>
    </div>
  );
};

export default Introduction;
