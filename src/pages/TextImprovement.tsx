import Footer from "../components/Footer";
import HeaderText from "../components/HeaderText";
import Iklan from "../components/Iklan";
import { DataHeaderTextProps } from "../interface/DataHeaderText";

const TextImprovement = () => {
  const itemContent: DataHeaderTextProps[] = [
    {
      title1: "Text Improvement",
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
      <Iklan />
      <div>Text Improvement</div>
      <Footer></Footer>
    </>
  );
};

export default TextImprovement;
