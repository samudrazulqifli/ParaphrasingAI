import write from "../images/write-summary.png";

const CardSummarize = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="font-semibold md:text-[50px] text-black flex justify-center">
          Document AI text summarizer
        </div>
      </div>
      <div className="grid grid-flow-col">
        <div className="flex col-start-2 text-center md:justify-center md:gap-[236px] md:mt-10 flex-col-reverse md:flex-row md:col-start-1">
          <div className="text-black md:text-[18px] text-[7.63px] font-medium md:w-[414px] w-[194px] h-full md:space-y-12 space-y-3">
            <div>
              Our AI-powered summarization tool swiftly generates brief and
              to-the-point summaries of your text within seconds, effectively
              handling lengthy content like articles and paragraphs.
            </div>
            <div>
              Our algorithm examines your text, pinpointing the key elements,
              and generates a summary, thereby streamlining your workflow and
              conserving your resources."
            </div>
            <div>You can use it for free, without any limits.</div>
          </div>
          <div className="mb-5 md:w-[433px] md:h-[374px] w-[175px] h-[101]">
            <img src={write} alt="write" className="md:rounded-[53px] rounded-[14.35px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSummarize;
