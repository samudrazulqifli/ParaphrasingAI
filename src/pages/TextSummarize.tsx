import CardText from "../components/CardText";
import Footer from "../components/Footer";
import HeaderText from "../components/HeaderText";
import Iklan from "../components/Iklan";
import IdentifyTheMainPoint from "../components/textsummarization/IdentifyTheMainPoint";
import ProduceHigher from "../components/textsummarization/ProduceHigher";
import RevampLengthly from "../components/textsummarization/RevampLengthly";
import { DataCardTextProps } from "../interface/DataCardText";
import { DataHeaderTextProps } from "../interface/DataHeaderText";

const TextSummarize = () => {
  const itemContent: DataHeaderTextProps[] = [
    {
      title1: "Text Summarization",
      title2: "Free Summary Generator",
      description:
        "Simplify your content writing with our text summary generator. Transform your paragraphs, articles, and other long text into digestible and engaging copy in one click.",
    },
  ];
  const cardContent: DataCardTextProps[] = [
    {
      title1: "Your Text",
      title2: "Summary",
      button: "Summarize",
      link: "/",
    },
  ];
  return (
    <>
      <div className="relative">
        <div className="flex justify-center  m-auto mt-40 md:mt-[900px] left-0 right-0 top-0 bottom-0 absolute">
          <CardText
            title1={cardContent[0].title1}
            title2={cardContent[0].title2}
            link={cardContent[0].link}
            button={cardContent[0].button}
          ></CardText>
        </div>
      </div>
      <div className="mb-28 md:mb-80">
        <HeaderText
          title1={itemContent[0].title1}
          title2={itemContent[0].title2}
          description={itemContent[0].description}
        ></HeaderText>
      </div>
      {/* <Iklan /> */}
      <RevampLengthly />
      <IdentifyTheMainPoint />
      <ProduceHigher />
      <Footer></Footer>
    </>
  );
};

export default TextSummarize;
