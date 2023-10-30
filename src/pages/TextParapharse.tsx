import CardText from "../components/CardText";
import Footer from "../components/Footer";
import HeaderText from "../components/HeaderText";
import Iklan from "../components/Iklan";
import ParapharsingDefine from "../components/ParapharsingDefine";
import FunctioningParaphrase from "../components/textparaphrase/FunctioningParaphrase";
import ReceiveDataDriven from "../components/textparaphrase/ReceiveDataDriven";
import { useEffect, useState } from "react";
import { DataCardTextProps, Option } from "../interface/DataCardText";
import { DataHeaderTextProps } from "../interface/DataHeaderText";
import { DataTextParapharsingDefine } from "../interface/DataTextParapharsingDefine";
import { useForm, SubmitHandler } from "react-hook-form";
import { ParaphraseInput } from "../interface/api/IFormInput";
import { ResponseData } from "../interface/api/Response";
import { textParaphrase } from "../axios/textParphrase.service";
import Loading from "../components/loading";
import { useAppSelector } from "../redux/feature/hooks";
import { useNavigate } from "react-router-dom";

const TextParapharse = () => {
  const { register, handleSubmit } = useForm<ParaphraseInput>();
  const [result, setResult] = useState<any>();
  const [loading, setLoading] = useState<any>();
  const [status, setStatus] = useState<boolean>(false);
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const navigation = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigation("/");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const cardContent: DataCardTextProps[] = [
    {
      title1: "Your Text",
      title2: "Summary",
      button: "Summarize",
      link: "/textParapharse",
      form: { ...register("query") },
      data: result,
      option: options,
      selected: { ...register("style") },
      loading: loading,
      status: status,
      addClass: "",
    },
  ];

  const onSubmit: SubmitHandler<ParaphraseInput> = (value) => {
    setStatus(true);
    setLoading(<Loading />);
    textParaphrase(value, (e: ResponseData) => {
      setResult(e);
      setStatus(false);
    });
  };
  return (
    <>
      <div className="relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center  m-auto mt-52 md:mt-[500px] left-0 right-0 top-0 bottom-0 absolute">
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
              addClass={cardContent[0].addClass}
            ></CardText>
          </div>
        </form>
      </div>
      <div className="mb-40 md:mb-10">
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
      <Iklan />
      <div className="mt-5">
        <ReceiveDataDriven />
      </div>
      <FunctioningParaphrase />
      <Footer></Footer>
    </>
  );
};

export default TextParapharse;
