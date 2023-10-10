import GenerateIntantly from "./GenerateIntantly";

const FunctioningParaphrase = () => {
  return (
    <>
      <div className="md:w-[1356px] md:my-[29px] my-[9px] w-[300px] md:h-[465px] md:pt-[42px] pt-[9.51px] h-[102.876px] bg-[#047AC0] mx-auto md:rounded-[21px] rounded-[4.65px] md:px-[45px] px-[9px]">
        <div className="md:text-[25px] text-[5.53px] text-center text-white font-semibold">
          What is the functioning of the paraphrasing tool?
        </div>
        <div className="md:mt-[29px] mt-[6.05px] md:text-[18px] text-[3.98px]">
          DocumentorAI Paraphrasing tool utilizes an advanced machine-learning
          algorithm to assist you in creating compelling content that captures
          <br />
          the attention of your target audience. Best of all, it's available for
          use at no cost.
        </div>
        <div className="flex justify-between md:mt-[43px] mt-[4.42px]">
          <GenerateIntantly />
          <GenerateIntantly />
          <GenerateIntantly />
        </div>
      </div>
    </>
  );
};

export default FunctioningParaphrase;
