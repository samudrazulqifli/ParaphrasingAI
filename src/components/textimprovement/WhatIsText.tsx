import imgLogo from "../../assets/images/img-improve.png";

const WhatIsText = () => {
  return (
    <>
      <div className="md:w-[1204px] w-[326.083px] md:h-[465px] h-[125.938px] flex justify-center items-center gap-x-[18px] bg-[#047AC0] mx-auto md:rounded-[21px] rounded-[5.688px] md:mt-0 mt-20">
        <div className="">
          <div className="md:text-[35px] text-[9.479px]">What is a Text Improvement tool?</div>
          <div className="md:text-[18px] text-[4.875px] md:mt-[22px] mt-[5.6px]">
            The AI Paragraph Rewriter by DAI paraphrases and rewords your
            <br />
            paragraphs to help you avoid plagiarism. It also improves
            readability,
            <br />making your copy more engaging and easier to understand.
          </div>
        </div>
        <div>
          <img
            src={imgLogo}
            className="md:w-[433px] w-[117.271px] md:h-[374px] h-[101.292px] md:rounded-[65px] rounded-[17.604px]"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default WhatIsText;
