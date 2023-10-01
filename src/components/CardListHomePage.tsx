import { DataHomePageProps } from "../interface/DataHomePageProps";
import { ParentCompProps } from "../interface/ParentCompProps";
import GetStarted from "./GetStarted";

type Props = DataHomePageProps & ParentCompProps;

const CardListHomePage: React.FC<Props> = (props: any) => {
  const { childComp } = props as ParentCompProps;
  const { title, subtitle, description } = props as DataHomePageProps;
  return (
    <>
      <div className="grid place-items-center">
        <div className="md:text-[50px] text-[12.48px] font-semibold md:my-10 my-3">
          {title}
        </div>
        <div className="md:w-[1203px] w-[300px] md:h-[464px] h-[115.78px] bg-[#047AC0] rounded-tr-lg rounded-br-lg flex">
          <div className="md:min-w-[521px] min-w-[130px] md:h-[464px] h-[115.78px] bg-[#F4F4F4] rounded-tr-lg rounded-br-lg relative">
            {childComp}
          </div>
          <div className="md:ml-[35px] ml-2 md:mb-12 mb-2 mr-[35px] flex flex-col justify-end md:gap-7 gap-2">
            <div className="text-left md:text-[25px] text-[6.24px] font-semibold text-white">
              {subtitle}
            </div>
            <div style={{whiteSpace: "pre"}} className="text-left md:text-[18px] text-[4.49px] md:font-normal font-medium text-white">
              {description}
            </div>
            <GetStarted />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardListHomePage;
