import Footer from "../components/Footer";
import HeaderText from "../components/HeaderText";
import Iklan from "../components/Iklan";
import { DataHeaderTextProps } from "../interface/DataHeaderText";
import CardChat from "../components/chatpdf/CardChat";
import { useAppSelector } from "../redux/feature/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardListHomePage from "../components/CardListHomePage";
import Chat from "../components/homepagelist/ChatPdf";
import { DataHomePageProps } from "../interface/DataHomePageProps";

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

  const chatPdfContent: DataHomePageProps[] = [
    {
      title: "",
      subtitle: "Convert Text into Pdf file safely and easily",
      description:
        "Remember to review your PDF file after conversion to ensure it\nlooks as expected. These methods should help you safely\nand easily convert your text into a PDF file based on\nyour preferences and needs.",
      page: "",
    },
  ];

  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const navigation = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigation("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      <div>
        <div className="relative">
          <div className="">
            <div className="absolute m-auto mt-24 flex justify-center top-0 bottom-0 left-0 right-0">
              <CardChat />
            </div>
          </div>
        </div>
        <div className="md:mb-[475px] mb-48">
          <HeaderText
            title1={itemContent[0].title1}
            title2={itemContent[0].title2}
            description={itemContent[0].description}
          ></HeaderText>
        </div>
      </div>
      <div className=" md:hidden block mb-5">
        <CardListHomePage
          bg={"#F4F4F4"}
          {...chatPdfContent[0]}
          childComp={<Chat />}
        ></CardListHomePage>
      </div>
      <Iklan />
      <Footer></Footer>
    </>
  );
};

export default ChatPdf;
