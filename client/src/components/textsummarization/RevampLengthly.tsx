import GetStarted from "../GetStarted";
import TextSummarize from "../homepagelist/TextSummarize";

const RevampLengthly = () => {
  return (
    <>
      <div className="grid place-items-center">
        <div className="md:w-[1203px] w-[326.08px] md:h-[464px] h-[115.78px] bg-[#047AC0] rounded-tr-lg rounded-br-lg flex">
          <div className="md:min-w-[521px] text-[#4E4E4E] min-w-[130px] md:h-[464px] h-[115.78px] bg-[#F4F4F4] rounded-tr-lg rounded-br-lg relative">
            <TextSummarize />
          </div>
          <div className="md:ml-[35px] ml-2 md:mb-12 mb-2 mr-[35px] flex flex-col justify-end md:gap-7 gap-2">
            <div className="text-left md:text-[25px] text-[6.24px] font-semibold text-white">
              Revamp lengthy content into captivating<br></br>
              and approachable text
            </div>
            <div className="text-left md:text-[18px] text-[4.49px] md:font-normal font-medium text-white">
              Easily transform your paragraphs and articles into digestible
              <br></br>
              summaries and bullet points.
            </div>
            <GetStarted />
          </div>
        </div>
      </div>
    </>
  );
};

export default RevampLengthly;
