import GetStarted from "../components/GetStarted";
import { DataHomePageProps } from "../interface/DataHomePageProps";
import TextParaphrase from "../components/homepagelist/TextParaphrase";
import ChatPdf from "../components/homepagelist/ChatPdf";
import TextSummarize from "../components/homepagelist/TextSummarize";
import TextImprovement from "../components/homepagelist/TextImprovement";

const Homepage = () => {
  const itemContent: DataHomePageProps[] = [
    {
      title: "Text Paraphrase",
      subtitle: "Express our thoughts clearl an sincerel",
      description:
        "To enhance the effectiveness of oyur communication. The tool will:\nCondense and reorganize sentences\nRevise and tailor sentences as needed\nOffer three distinct rephrased versions for any concept\nCraft text that sounds natural to a native English audience.",
    },
    {
      title: "Chat Pdf",
      subtitle: "Convert Text into Pdf file safely and easily",
      description:
        "Remember to review your PDF file after conversion to ensure it looks as expected. These methods should help you safely and easily convert your text into a PDF file based on your preferences and needs.",
    },
    {
      title: "Text Summarize",
      subtitle: "Revamp lengthy content into captivating and approachable text",
      description:
        "Easily transform your paragraphs and articles into digestible summaries and bullet points.",
    },
    {
      title: "Text Improvement",
      subtitle: "What is a Text Improvement tool?",
      description:
        "The AI Text Improvement offered by Documentor.AI serves to rephrase and restructure your paragraphs, assisting in the prevention of plagiarism Additionally, it enhances the overall readability of your content, rendering it more captivating and user-friendly.",
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="md:text-[50px] text-[12px] mx-[89px] text-center font-bold">
          Accessible practical content marketing expertise
          <br />
          readily available to you.
        </div>
        <div className="md:w-[1203px] md:h-[340px] h-[84.79px] w-[300px] md:pl-12 pl-2 md:rounded-2xl rounded-md bg-gradient-to-r from-[#047AC0] from-10% via-10% to-95% to-[#00FFD1] mx-auto flex flex-col justify-evenly">
          <div className="md:text-[30px] text-[7.48px] text-white font-semibold">
            Explore our complimentary Paraphrasing tool for
            <br />
            your company
          </div>
          <div className="md:text-[22px] text-[5.49px] text-white">
            Looking to kickstart your paraphrasing efforts and develop a
            successful
            <br />
            content quickly?{" "}
          </div>
          <GetStarted />
        </div>

        {/* Text Pharafrase */}
        <div className="grid place-items-center">
          <div className="md:text-[50px] text-[12.48] font-semibold my-10">{itemContent[0].title}</div>
          <div className="w-[1203px] h-[464px] bg-[#047AC0] rounded-tr-lg rounded-br-lg flex">
            <div className="min-w-[521px] h-[464px] bg-[#F4F4F4] rounded-tr-lg rounded-br-lg relative">
              <TextParaphrase />
            </div>
            <div className="ml-[35px] mb-12 mr-[35px] flex flex-col justify-end gap-7">
              <div className="text-left text-[30px] text-white">
                {itemContent[0].subtitle}
              </div>
              <div className="text-left text-[18px] text-white">
                {itemContent[0].description}
              </div>
              <GetStarted />
            </div>
          </div>
        </div>

        {/* Chat Pdf */}
        <div className="grid place-items-center">
          <div className="md:text-[50px] text-[12.48] font-semibold my-10">{itemContent[1].title}</div>
          <div className="w-[1203px] h-[464px] bg-[#047AC0] rounded-tr-lg rounded-br-lg flex">
            <div className="min-w-[521px] h-[464px] bg-[#F4F4F4] rounded-tr-lg rounded-br-lg relative">
              <ChatPdf />
            </div>
            <div className="ml-[35px] mb-12 mr-[35px] flex flex-col justify-end gap-7">
              <div className="text-left text-[30px] text-white">
                {itemContent[1].subtitle}
              </div>
              <div className="text-left text-[18px] text-white">
                {itemContent[1].description}
              </div>
              <GetStarted />
            </div>
          </div>
        </div>

        {/* Text Summarize */}
        <div className="grid place-items-center">
          <div className="md:text-[50px] text-[12.48] font-semibold my-10">{itemContent[2].title}</div>
          <div className="w-[1203px] h-[464px] bg-[#047AC0] rounded-tr-lg rounded-br-lg flex">
            <div className="min-w-[521px] h-[464px] bg-[#F4F4F4] rounded-tr-lg rounded-br-lg relative">
              <TextSummarize />
            </div>
            <div className="ml-[35px] mb-12 mr-[35px] flex flex-col justify-end gap-7">
              <div className="text-left text-[30px] text-white">
                {itemContent[2].subtitle}
              </div>
              <div className="text-left text-[18px] text-white">
                {itemContent[2].description}
              </div>
              <GetStarted />
            </div>
          </div>
        </div>

        {/* Text Improvement */}
        <div className="grid place-items-center">
          <div className="md:text-[50px] text-[12.48] font-semibold my-10">{itemContent[3].title}</div>
          <div className="w-[1203px] h-[464px] bg-[#047AC0] rounded-tr-lg rounded-br-lg flex">
            <div className="min-w-[521px] h-[464px] bg-[#F4F4F4] rounded-tr-lg rounded-br-lg relative">
              <TextImprovement />
            </div>
            <div className="ml-[35px] mb-12 mr-[35px] flex flex-col justify-end gap-7">
              <div className="text-left text-[30px] text-white">
                {itemContent[3].subtitle}
              </div>
              <div className="text-left text-[18px] text-white">
                {itemContent[3].description}
              </div>
              <GetStarted />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
