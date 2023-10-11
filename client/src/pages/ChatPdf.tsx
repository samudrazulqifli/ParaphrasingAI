import Footer from "../components/Footer";
import HeaderText from "../components/HeaderText";
import Iklan from "../components/Iklan";
import { DataHeaderTextProps } from "../interface/DataHeaderText";
import ChatPage from "./ChatPage";

const ChatPdf = () => {
  const itemContent: DataHeaderTextProps[] = [
    {
      title1: "Chat PDF",
      title2:
        "Do you have any question in your mind? Ask our AI powered chat bot",
      description:
        "Please let me know what questions or topics you'd like to discuss, and I'll do my best to provide you with information and assistance",
    },
  ];
  return (
    <>
      <HeaderText
        title1={itemContent[0].title1}
        title2={itemContent[0].title2}
        description={itemContent[0].description}
      ></HeaderText>
      <Iklan />
      <ChatPage />
      <Footer></Footer>
    </>
  );
};

export default ChatPdf;
