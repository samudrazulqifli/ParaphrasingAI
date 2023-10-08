import CardListHomePage from "../components/CardListHomePage";
import CardText from "../components/CardText";
import Footer from "../components/Footer";
import HeaderText from "../components/HeaderText";
import Iklan from "../components/Iklan";
import { DataHeaderTextProps } from "../interface/DataHeaderText";
import { DataHomePageProps } from "../interface/DataHomePageProps";
import ChatPage from "./ChatPage";
import Chatpdf from "../components/homepagelist/ChatPdf";

const ChatPdf = () => {
  const itemContent: DataHeaderTextProps[] = [
    {
      title1: "Chat PDF",
      title2:
        "Do you have any question in your mind? Ask our AI powered chat bot",
      description:
        "Please let me know what questions or topics you'd like to discuss,and I'll \ndo my best to provide you with information and assistance",
    },
  ];
  const itemCard : DataHomePageProps[] =[
    {
      title: "Chat Pdf",
      subtitle: "Convert Text into Pdf file safely and easily",
      description:
        "Remember to review your PDF file after conversion to ensure it\nlooks as expected. These methods should help you safely\nand easily convert your text into a PDF file based on\nyour preferences and needs.",
    }
  ]
  return (
    <>
      <div>
      <div className="relative">
        <div className=" hidden md:block">
          <div className="absolute m-auto flex justify-center top-0 bottom-0 left-0 right-0">
            <ChatPage />
          </div>
        </div>
        <div className="md:hidden block">
          <div className="absolute m-auto mt-48 flex justify-center top-0 bottom-0 left-0 right-0">
            <CardText
              title1={"cek"}
              title2={"cek"}
              link={""}
              button={"cek"}
            ></CardText>
          </div>
        </div>
      </div>
        <div className="md:mb-[500px] mb-36">
          <HeaderText
            title1={itemContent[0].title1}
            title2={itemContent[0].title2}
            description={itemContent[0].description}
          ></HeaderText>
        </div>
      </div>
      <CardListHomePage {...itemCard[0]} childComp={<Chatpdf></Chatpdf>}/>
      <Iklan />
      <Footer></Footer>
    </>
  );
};

export default ChatPdf;
