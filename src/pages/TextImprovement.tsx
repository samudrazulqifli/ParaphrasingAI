import { useState } from "react";
import CardText from "../components/CardText";
import Footer from "../components/Footer";
import HeaderText from "../components/HeaderText";
import Iklan from "../components/Iklan";
import WhatIsText from "../components/textimprovement/WhatIsText";
import YourParagraph from "../components/textimprovement/YourParagraph";
import IdentifyTheMainPoint from "../components/textsummarization/IdentifyTheMainPoint";
import { DataCardTextProps, Option } from "../interface/DataCardText";
import { DataHeaderTextProps } from "../interface/DataHeaderText";
import { SubmitHandler, useForm } from "react-hook-form";
import { ImprovementInput } from "../interface/api/IFormInput";
import { textImprovement } from "../axios/textImprovement";
import { ResponseData } from "../interface/api/Response";

const TextImprovement = () => {
  const { register, handleSubmit } = useForm<ImprovementInput>();
  const [result, setResult] = useState<any>();
  const itemContent: DataHeaderTextProps[] = [
    {
      title1: "Text Improvement",
      title2: "Free Summary Generator",
      description:
        "Simplify your content writing with our text summary generator.\nTransform your paragraphs, articles, and other long text into digestible\nand engaging copy in one click.",
    },
  ];
  const options: Option[] = [
    {
      option: "general",
    },
    {
      option: "casual",
    },
    {
      option: "formal",
    },
    {
      option: "short",
    },
  ];
  const cardContent: DataCardTextProps[] = [
    {
      title1: "Your Text",
      title2: "Improved Text",
      button: "Improved",
      link: "/",
      form: { ...register("query") },
      data: result,
      option: options,
      selected: { ...register("intent") },
    },
  ];
  const onSubmit: SubmitHandler<ImprovementInput> = (value) =>
    textImprovement(value, (e: ResponseData) => {
      setResult(e);
    });
  return (
    <>
      <div className="relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center  m-auto mt-52 md:mt-[780px] left-0 right-0 top-0 bottom-0 absolute">
            <CardText
              title1={cardContent[0].title1}
              title2={cardContent[0].title2}
              link={cardContent[0].link}
              button={cardContent[0].button}
              form={cardContent[0].form}
              data={result}
              option={options}
              selected={cardContent[0].selected}
            ></CardText>
          </div>
        </form>
      </div>
      <div className="mb-28 md:mb-80">
        <HeaderText
          title1={itemContent[0].title1}
          title2={itemContent[0].title2}
          description={itemContent[0].description}
        ></HeaderText>
      </div>
      <Iklan />
      <div className="grid grid-flow-row md:gap-5 gap-2 md:mb-10 mb-3">
        <div className="text-black font-semibold md:text-[50px] text-[20px]  text-center">
          <div className=""></div>
        </div>
        <WhatIsText />
        <YourParagraph />
        <IdentifyTheMainPoint />
      </div>
      <Footer></Footer>
    </>
  );
};

export default TextImprovement;
