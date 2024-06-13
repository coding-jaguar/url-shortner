import Image from "next/image";
const Card = ({ title, photo, text, margin }: any) => {
  const clasname = `bg-white pt-10 pl-10 mt-${margin}`;

  return (
    <div>
      <div className={clasname}>
        <div className=" bg-veryDarkBlue p-4 rounded-full w-fit -mt-20">
          <Image alt="" src={photo} width={40} height={40}></Image>
        </div>

        <div className="py-10 px-5">
          <div className="mt-5 text-2xl font-bold text-veryDarkBlue">
            {title}
          </div>
          <div className="mt-5 text-gray-400">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
