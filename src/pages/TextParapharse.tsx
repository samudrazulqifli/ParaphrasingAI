import CardText from "../components/CardText";
import Footer from "../components/Footer";
import HeaderText from "../components/HeaderText";
import Iklan from "../components/Iklan";
import { DataCardTextProps } from "../interface/DataCardText";
import { DataHeaderTextProps } from "../interface/DataHeaderText";

const TextParapharse = () => {
  const cardContent: DataCardTextProps[] = [
    {
      title1: "Your Text",
      title2: "Your Idea",
      button: "Improved",
      link: "/",
    },
  ];
  const itemContent: DataHeaderTextProps[] = [
    {
      title1: "Text Parpharse",
      title2: "Free Improvement Generator",
      description:
        "Rephrase the following text using our AI paragraph rewriting tool for instant\nimprovements in your content's clarity and the generation of unique,\nplagiarism-free text.",
    },
  ];
  return (
    <>
      <div className="relative">
        <div className="flex justify-center  m-auto mt-52 md:mt-[780px] left-0 right-0 top-0 bottom-0 absolute">
          <CardText
            title1={cardContent[0].title1}
            title2={cardContent[0].title2}
            link={cardContent[0].link}
            button={cardContent[0].button}
          ></CardText>
        </div>
      </div>
      <div className="mb-80">
        <HeaderText
          title1={itemContent[0].title1}
          title2={itemContent[0].title2}
          description={itemContent[0].description}
        ></HeaderText>
      </div>
      <Iklan />
      <Footer></Footer>
    </>
  );
};

export default TextParapharse;
