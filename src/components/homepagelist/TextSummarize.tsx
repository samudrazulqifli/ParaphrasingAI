import imgLogo from "../../assets/images/stack-blue.png";

const TextSummarize = () => {
  return (
    <>
      <div className="bg-white md:h-[192px] h-[47.91px] md:w-[327px] w-[81.59px] md:rounded-xl rounded-sm absolute md:left-10 md:top-12 top-2 left-2 md:p-4 p-1 text-black">
        <div className="md:text-[12px] text-[2.99px] font-semibold">
          Your Text
        </div>
        <div className="md:border border-[0.01px] border-[#E9E9E9] md:rounded-lg rounded-sm md:w-[296px] w-[73.86px] md:h-[140px] h-[34.93px] md:mt-1 mt-[1px] md:pt-4 flex flex-col">
          <div className="mx-auto flex flex-col md:gap-3 gap-[2px] pt-1">
            <div className="md:w-[252px] w-[62.88px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="md:w-[252px] w-[62.88px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="md:w-[252px] w-[62.88px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="md:w-[252px] w-[62.88px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="md:w-[115px] w-[28px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
          </div>
        </div>
      </div>
      <div className="bg-white md:h-[271px] h-[67.62px] md:w-[327px] w-[81.59px] md:rounded-xl rounded-sm absolute md:right-12 md:bottom-12 right-3 bottom-3 md:p-4 p-1 md:text-[12px] text-[2.99px] font-semibold">
        <div className="flex justify-between">
          <div className="">Summary</div>
          <div className="flex items-center">
            <div className="flex items-center justify-center md:w-[74px] w-[18.3px] md:text-[10px] text-[2.5px] text-[#ef825b] text-center font-medium md:h-[26px] h-[6.49px] bg-[#FFE0D5] border-[#ffa49b] md:border-[0.5px] border-[0.12px] md:rounded-l-[5px] rounded-l-[1.25px]">
              Paragraph
            </div>
            <div className="flex items-center justify-center md:w-[94px] w-[23.46px] md:text-[10px] text-[2.5px] text-[#4E4E4E] text-center font-medium md:h-[26px] h-[6.49px] bg-white rounded-r-[5px] border-[0.12px] border-[#d9d9d9] rounded-l-[1.25px]">
              Bullet Proof
            </div>
          </div>
        </div>
        <div className="md:border-2 border-[0.01px] border-[#E9E9E9] md:rounded-lg rounded-sm md:w-[296px] w-[73.86px] md:h-[169px] h-[42.17px] md:mt-1 mt-[1px] md:pt-4 flex flex-col">
          <div className="mx-auto grid grid-cols-1 md:gap-3 gap-[3px] pt-1">
            <div className="md:w-[241px] w-[60.135px] md:h-[9px] h-[2px] bg-[#047AC0] rounded-2xl"></div>
            <div className="md:w-[241px] w-[60.135px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="md:w-[241px] w-[60.135px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="flex md:justify-between gap-x-[2.28px]">
              <div className="md:w-[8px] w-[1.89px] md:h-[9px] h-[1.89px] bg-[#047AC0] rounded-2xl"></div>
              <div className="grid grid-cols-1 md:gap-3 gap-[3px]">
                <div className="md:w-[224px] w-[55.89px] md:h-[9px] h-[2px] bg-[#047AC0] rounded-2xl"></div>
                <div className="md:w-[99px] w-[24.7px] md:h-[9px] h-[2px] bg-[#047AC0] rounded-2xl"></div>
              </div>
            </div>
            <div className="flex md:justify-between gap-x-[2.28px]">
              <div className="md:w-[8px] w-[1.89px] md:h-[9px] h-[1.89px] bg-[#E9E9E9] rounded-2xl"></div>
              <div className="grid grid-cols-1 md:gap-3 gap-[3px]">
                <div className="md:w-[224px] w-[55.89px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
                <div className="md:w-[99px] w-[24.7px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[277px] w-[69.12px] md:h-[33px] h-[8.23px] md:border border-[0.25px] border-[#047AC0] md:rounded rounded-sm mx-auto grid content-center md:mt-3 mt-[2px]">
          <img
            className="md:h-[17px] h-[4.18px] md:w-[17px] w-[4.18px] mx-auto"
            src={imgLogo}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default TextSummarize;
