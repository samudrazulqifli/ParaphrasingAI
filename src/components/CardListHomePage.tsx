import { DataHomePageProps } from "../interface/DataHomePageProps";
import GetStarted from "./GetStarted";

const CardListHomePage = (item: DataHomePageProps, props: any) => {
  const { imageList } = props;
  return (
    <>
      <div className="grid place-items-center">
        <div className="text-5xl my-10">{item.title}</div>
        <div className="w-[1203px] h-[464px] bg-[#047AC0] rounded-tr-lg rounded-br-lg flex">
          <div className="min-w-[521px] h-[464px] bg-[#F4F4F4] rounded-tr-lg rounded-br-lg relative">
            
          </div>
          <div className="ml-[35px] mb-12 mr-[35px] flex flex-col justify-end gap-7">
            <div className="text-left text-[30px] text-white">
              {item.subtitle}
            </div>
            <div className="text-left text-[18px] text-white">
              {item.description}
            </div>
            <GetStarted />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardListHomePage;
