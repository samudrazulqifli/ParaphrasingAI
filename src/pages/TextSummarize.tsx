import Footer from "../components/Footer";
import HeaderText from "../components/HeaderText";
import Iklan from "../components/Iklan";
import IdentifyTheMainPoint from "../components/textsummarization/IdentifyTheMainPoint";
import ProduceHigher from "../components/textsummarization/ProduceHigher";
import RevampLengthly from "../components/textsummarization/RevampLengthly";
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
  return (
    <>
      <HeaderText
        title1={itemContent[0].title1}
        title2={itemContent[0].title2}
        description={itemContent[0].description}
      ></HeaderText>
      <div>Text Summarize</div>
      {/* <Iklan /> */}
      <RevampLengthly />
      <IdentifyTheMainPoint />
      <ProduceHigher />
      <Footer></Footer>
    </>
  );
};

export default TextSummarize;
