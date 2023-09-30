import imgLogo from "../../assets/images/stack-blue.png"

const TextSummarize = () => {
  return (
    <>
      <div className="bg-white h-[192px] w-[327px] rounded-xl absolute left-10 top-12 p-4">
        <div className="flex justify-between">
          <div className="text-black text-[12px] font-semibold">Your Idea</div>
          <div className="flex items-center gap-1">
            <div className="text-black text-[12px] font-semibold">idea2</div>
            <div className="w-[29px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[29px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
          </div>
        </div>
        <div className="border border-black rounded-lg w-[296px] h-[140px] mt-1 pt-4 flex flex-col">
          <div className="mx-auto flex flex-col gap-3 pt-1">
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[115px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[271px] w-[327px] rounded-xl absolute right-12 bottom-12 p-4">
        <div className="flex justify-between">
          <div className="text-black text-[12px] font-semibold">Text Idea</div>
          <div className="flex items-center gap-1">
            <div className="text-black text-[12px] font-semibold">idea1</div>
            <div className="w-[29px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[29px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
          </div>
        </div>
        <div className="border border-black rounded-lg w-[296px] h-[169px] mt-1 pt-4 flex flex-col">
          <div className="mx-auto flex flex-col gap-3 pt-1">
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[115px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
          </div>
        </div>
        <div className="w-[277px] h-[33px] border border-[#047AC0] rounded mx-auto grid content-center mt-3">
          <img className="h-[17px] w-[17px] mx-auto" src={imgLogo} alt="" />
        </div>
      </div>
    </>
  );
};

export default TextSummarize;
