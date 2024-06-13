import Card from "./Card";
import image1 from "../../givenstuff/images/icon-brand-recognition.svg";
import image2 from "../../givenstuff/images/icon-detailed-records.svg";
import image3 from "../../givenstuff/images/icon-fully-customizable.svg";

const CardSections = () => {
  const cards = [
    {
      image: image1,
      title: "Brand Recognition",
      text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content",
      margin: "0",
    },
    {
      image: image2,
      title: "Detailed Records",
      text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      margin: "10",
    },
    {
      image: image3,
      title: "Fully Customizable",
      text: "Improve brand awareness and content discoverability with customizable links supercharging audience engagement.",
      margin: "20",
    },
  ];
  return (
    <div className="relative">
      <div className="w-8/12 h-1 bg-gradient-to-r from-blue-500 to-blue-500 absolute top-1/2 mx-40 z-0"></div>
      <div className="relative mt-20 mb-20 pb-20 gap-8 px-20 h-full flex z-10">
        {cards.map((card, index) => {
          return (
            <Card
              photo={card.image}
              title={card.title}
              key={card.title}
              text={card.text}
              margin={card.margin}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default CardSections;
