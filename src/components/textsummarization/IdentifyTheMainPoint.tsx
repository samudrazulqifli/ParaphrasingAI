import TextSummarize from "../homepagelist/TextSummarize";

const IdentifyTheMainPoint = () => {
  return (
    <>
      <div className="md:w-[1204px] w-[326.08px] flex justify-between md:h-[465px] h-[125.94px] bg-[#30FFFD] mx-auto md:rounded-[21px] rounded-[5.69px]">
        <div className="md:pl-[54px] pl-[14.63px] flex flex-col text-black justify-center md:gap-3 gap-y-[6.33px] items-start">
          <div className="md:text-[35px] text-[9.48px] font-semibold">
            Identify the main points and ideas<br></br>in your copy in one click
          </div>
          <div className="md:text-[18px] text-[4.88px] ">
            Count on robust AI to extract crucial concepts while<br></br>
            removing unnecessary text.
          </div>
        </div>
        <div className="relative md:w-[521px] w-[141.1px]">
          <TextSummarize />
        </div>
      </div>
    </>
  );
};

export default IdentifyTheMainPoint;
