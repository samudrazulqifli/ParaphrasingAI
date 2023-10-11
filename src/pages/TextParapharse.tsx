import CardListHomePage from "../components/CardListHomePage";
import CardText from "../components/CardText";
import Footer from "../components/Footer";
import HeaderText from "../components/HeaderText";
import Iklan from "../components/Iklan";
import ParapharsingDefine from "../components/ParapharsingDefine";
import TextParaphrase from "../components/homepagelist/TextParaphrase";
import FunctioningParaphrase from "../components/textparaphrase/FunctioningParaphrase";
import ReceiveDataDriven from "../components/textparaphrase/ReceiveDataDriven";
import { DataCardTextProps } from "../interface/DataCardText";
import { DataHeaderTextProps } from "../interface/DataHeaderText";
import { DataHomePageProps } from "../interface/DataHomePageProps";
import { DataTextParapharsingDefine } from "../interface/DataTextParapharsingDefine";

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
      title1: "Paraphrasing Tool",
      title2: "Generate compelling and unique \ntext using AI.",
      description:
        "Transform your thoughts into compelling text that convinces your \naudience and narrates your story effectively",
    },
  ];
  const defineText: DataTextParapharsingDefine[] = [
    {
      title: "What benefits does the paraphrasing tool offer you?",
      description:
        " Gain valuable insights into this year's content marketing trends,successes, forecasts,\nand other essential information. Take inspiration from businesses similar to yours\n and explore fresh avenues for growth.",
    },
  ];
  const cardDefine: DataHomePageProps[] = [
    {
      title: "",
      subtitle: "Express our thoughts clearl an sincerel",
      description:
        "To enhance the effectiveness of oyur communication. The tool will:\n• Condense and reorganize sentences\n• Revise and tailor sentences as needed\n• Offer three distinct rephrased versions for any concept\n• Craft text that sounds natural to a native English audience.",
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
      <div className="mb-40 md:mb-68">
        <HeaderText
          title1={itemContent[0].title1}
          title2={itemContent[0].title2}
          description={itemContent[0].description}
        ></HeaderText>
      </div>
      <ParapharsingDefine
        title={defineText[0].title}
        description={defineText[0].description}
      ></ParapharsingDefine>
      <div className="md:mb-10 mb-5">
        <CardListHomePage
          bg={""}
          {...cardDefine[0]}
          childComp={<TextParaphrase />}
        ></CardListHomePage>
      </div>
      <Iklan />
      <ReceiveDataDriven />
      <FunctioningParaphrase />
      <Footer></Footer>
    </>
  );
};

export default TextParapharse;
