import CardText from "../components/CardText";
import HeaderText from "../components/HeaderText";
import { DataCardTextProps } from "../interface/DataCardText";
import { DataHeaderTextProps } from "../interface/DataHeaderText";

const TextParapharse = () => {
  const itemContent: DataCardTextProps[] = [
    {
      title1: "Your Text",
      title2: "Your Idea",
      button: "Improved",
      link: "/",
    }
  ];
  return (
    <>
      <div className="flex justify-center mt-10">
        <CardText
          title1={itemContent[0].title1}
          title2={itemContent[0].title2}
          link={itemContent[0].link}
          button={itemContent[0].button}
        ></CardText>
      </div>
    </>
  );
};

export default TextParapharse;
