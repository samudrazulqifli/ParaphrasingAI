import CardListHomePage from "../components/CardListHomePage";
import CardText from "../components/CardText";
import Footer from "../components/Footer";
import HeaderText from "../components/HeaderText";
import Iklan from "../components/Iklan";
import ParapharsingDefine from "../components/ParapharsingDefine";
import TextParaphrase from "../components/homepagelist/TextParaphrase";
import FunctioningParaphrase from "../components/textparaphrase/FunctioningParaphrase";
import ReceiveDataDriven from "../components/textparaphrase/ReceiveDataDriven";
import { useState } from "react";
import { DataCardTextProps, Option } from "../interface/DataCardText";
import { DataHeaderTextProps } from "../interface/DataHeaderText";
import { DataHomePageProps } from "../interface/DataHomePageProps";
import { DataTextParapharsingDefine } from "../interface/DataTextParapharsingDefine";
import { useForm, SubmitHandler } from "react-hook-form";
import { ParaphraseInput } from "../interface/api/IFormInput";
import { ResponseData } from "../interface/api/Response";
import { textParaphrase } from "../axios/textParphrase.service";
import Loading from "../components/loading";

const TextParapharse = () => {
  const { register, handleSubmit } = useForm<ParaphraseInput>();
  const [result, setResult] = useState<any>();
  const [loading, setLoading] = useState<any>();
  const [status, setStatus] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  const cardContent: DataCardTextProps[] = [
    {
      title1: "Your Text",
      title2: "Summary",
      button: "Summarize",
      link: "/",
      form: { ...register("query") },
      data: result,
      option: options,
      selected: { ...register("style") },
      loading: loading,
      status: status
    },
  ];

  const onSubmit: SubmitHandler<ParaphraseInput> = (value) => {
    setStatus(true)
    setLoading(<Loading/>);
    textParaphrase(value, (e: ResponseData) => {
      setResult(e);
      setStatus(false)
    });
  };
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
              loading={cardContent[0].loading}
              status={cardContent[0].status}
            ></CardText>
          </div>
        </form>
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
