import { DataHomePageProps } from "../interface/DataHomePageProps";
import { ParentCompProps } from "../interface/ParentCompProps";
import GetStarted from "./GetStarted";

interface Background {
  bg: string;
}

type Props = DataHomePageProps & ParentCompProps & Background;

const CardListHomePage: React.FC<Props> = (props: any) => {
  const { childComp } = props as ParentCompProps;
  const { title, subtitle, description, page } = props as DataHomePageProps;
  const { bg } = props as Background;
  return (
    <>
      <div className="grid place-items-center">
        <div className="md:text-[50px] text-[12.48px] text-[#404040] font-semibold md:my-10 my-3">
          {title}
        </div>
        <div className="md:w-[1203px] w-[300px] md:h-[464px] h-[115.78px] bg-[#047AC0] rounded-lg flex">
          <div
            className={`md:min-w-[521px] text-[#4E4E4E] min-w-[130px] md:h-[464px] h-[115.78px] bg-[${bg}] rounded-tr-lg rounded-br-lg relative`}
          >
            {childComp}
          </div>
          <div className="md:ml-[35px] ml-2 md:mb-12 mb-2 mr-[35px] flex flex-col justify-end md:gap-7 gap-2">
            <div className="text-left md:text-[25px] text-[6.24px] font-semibold text-white">
              {subtitle}
            </div>
            <div
              style={{ whiteSpace: "pre" }}
              className="text-left md:text-[18px] text-[4.49px] md:font-normal font-medium text-white"
            >
              {description}
            </div>
            <GetStarted page={page} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardListHomePage;
