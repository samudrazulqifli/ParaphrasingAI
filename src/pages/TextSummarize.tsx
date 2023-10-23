import CardSummarize from "../components/CardSummarize";
import CardText from "../components/CardText";
import Footer from "../components/Footer";
import HeaderText from "../components/HeaderText";
import Iklan from "../components/Iklan";
import IdentifyTheMainPoint from "../components/textsummarization/IdentifyTheMainPoint";
import ProduceHigher from "../components/textsummarization/ProduceHigher";
import RevampLengthly from "../components/textsummarization/RevampLengthly";
import { DataCardTextProps, Option } from "../interface/DataCardText";
import { DataHeaderTextProps } from "../interface/DataHeaderText";
import { useForm, SubmitHandler } from "react-hook-form";
import { SummarizeInput } from "../interface/api/IFormInput";
import { textSummarize } from "../axios/textSummarize.service";
import { ResponseData } from "../interface/api/Response";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/feature/hooks";

const TextSummarize = () => {
  const { register, handleSubmit } = useForm<SummarizeInput>();
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

  const options: Option[] = [
    {
      option: "financial_report",
    },
    {
      option: "wikipedia_article",
    },
    {
      option: "academic_paper",
    },
  ];
  const itemContent: DataHeaderTextProps[] = [
    {
      title1: "Text Summarization",
      title2: "Free Summary Generator",
      description:
        "Simplify your content writing with our text summary generator.\n Transform your paragraphs, articles, and other long text into digestible\n and engaging copy in one click.",
    },
  ];

  const cardContent: DataCardTextProps[] = [
    {
      title1: "Your Text",
      title2: "Summary",
      button: "Summarize",
      link: "/textSummarize",
      form: { ...register("query") },
      data: result,
      option: options,
      selected: { ...register("type") },
      loading: loading,
      status: status,
      addClass: "",
    },
  ];

  const onSubmit: SubmitHandler<SummarizeInput> = (value) => {
    setStatus(true);
    setLoading(<Loading />);
    textSummarize(value, (e: ResponseData) => {
      setResult(e);
      setStatus(false);
    });
  };
  console.log(result);
  return (
    <>
      <div className="relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center  m-auto mt-40 md:mt-[900px] left-0 right-0 top-0 bottom-0 absolute">
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
      <div className="mb-28 md:mb-80">
        <HeaderText
          title1={itemContent[0].title1}
          title2={itemContent[0].title2}
          description={itemContent[0].description}
        ></HeaderText>
      </div>
      <CardSummarize />
      <Iklan />
      <div className="grid grid-flow-row md:gap-5 gap-2 md:mb-10 mb-3">
        <div className="text-black font-semibold md:text-[50px] text-[20px]  text-center">
          <div className="">What can you do with the summarizing tool?</div>
        </div>
        <RevampLengthly />
        <IdentifyTheMainPoint />
        <ProduceHigher />
      </div>
      <Footer></Footer>
    </>
  );
};

export default TextSummarize;
