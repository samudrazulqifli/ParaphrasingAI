import GetStarted from "../components/GetStarted";
import { DataHomePageProps } from "../interface/DataHomePageProps";
import TextParaphrase from "../components/homepagelist/TextParaphrase";
import ChatPdf from "../components/homepagelist/ChatPdf";
import TextSummarize from "../components/homepagelist/TextSummarize";
import TextImprovement from "../components/homepagelist/TextImprovement";
import CardListHomePage from "../components/CardListHomePage";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Homepage = () => {
  const itemContent: DataHomePageProps[] = [
    {
      title: "Text Paraphrase",
      subtitle: "Express our thoughts clearl an sincerel",
      description:
        "To enhance the effectiveness of oyur communication. The tool will:\n• Condense and reorganize sentences\n• Revise and tailor sentences as needed\n• Offer three distinct rephrased versions for any concept\n• Craft text that sounds natural to a native English audience.",
    },
    {
      title: "Chat Pdf",
      subtitle: "Convert Text into Pdf file safely and easily",
      description:
        "Remember to review your PDF file after conversion to ensure it\nlooks as expected. These methods should help you safely\nand easily convert your text into a PDF file based on\nyour preferences and needs.",
    },
    {
      title: "Text Summarize",
      subtitle: "Revamp lengthy content into captivating and approachable text",
      description:
        "Easily transform your paragraphs and articles into digestible\nsummaries and bullet points.",
    },
    {
      title: "Text Improvement",
      subtitle: "What is a Text Improvement tool?",
      description:
        "The AI Text Improvement offered by Documentor.AI serves to rephrase\nand restructure your paragraphs, assisting in the prevention of\nplagiarism Additionally, it enhances the overall readability of your\ncontent, rendering it more captivating and user-friendly.",
    },
  ];

  return (
    <>
    <Header></Header>
      <div className="w-full bg-white md:mt-20 mt-6 md:mb-16 mb-5">
        <div className="md:text-[50px] text-[12px] text-[#404040] text-center font-bold md:mb-11 mb-3">
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

        <CardListHomePage {...itemContent[0]} childComp={<TextParaphrase />} />
        <CardListHomePage {...itemContent[1]} childComp={<ChatPdf />} />
        <CardListHomePage {...itemContent[2]} childComp={<TextSummarize />} />
        <CardListHomePage {...itemContent[3]} childComp={<TextImprovement />} />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Homepage;
