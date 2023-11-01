import { useState, useRef, useEffect, useCallback } from "react";

import {
  RegisterByUpload,
  RegisterQuestion,
  RegisterQuestionByUrl,
  ResponseQuestion,
  ResponseUpload,
} from "../../interface/api/FormChatPdf";
import chatpdf from "../../axios/chatpdf.service";
import { ChatData } from "../../interface/ChatData";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import ChatBodyMobile from "./ChatBodyMobile";
import ChatWeb from "./ChatWeb";
import { useAppSelector } from "../../redux/feature/hooks";

const CardChat = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1);
  const [file, setFile] = useState<File | undefined>();
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");
  const [displayChat, setDisplayChat] = useState<ChatData[]>([]);
  const [dataChat, setDataChat] = useState<ChatData[]>([]);
  const [src, setSrc] = useState("");
  const [url, setUrl] = useState("");
  const [downloadPdf, setDownloadPdf] = useState(false);
  const [title, setTitle] = useState("");
  const [fromFile, setFromFile] = useState(true);
  const ref = useRef<HTMLInputElement | null>(null);
  const [visiblePages, setVisiblePages] = useState({});
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const { username } = useAppSelector((state) => state.auth);

  const messagesColumnRef = useRef<HTMLDivElement>(null);

  const setPageVisibility = useCallback(
    (pageNumber: number, isIntersecting: any) => {
      setVisiblePages((prevVisiblePages) => ({
        ...prevVisiblePages,
        [pageNumber]: isIntersecting,
      }));
    },
    []
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    ref.current?.click();
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    if (event.dataTransfer != undefined) {
      setFile(event.dataTransfer.files[0]);
      registerQuestionByUpload(event.dataTransfer.files[0]);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  };

  const reload = () => {
    setNumPages(numPages);
    setZoom(1);
  };

  const zoomControl = (offSet: number) => {
    setZoom((prevZoom) => prevZoom + offSet);
  };

  const zoomOut = () => {
    if (zoom > 1) {
      zoomControl(-0.1);
    }
  };

  const zoomIn = () => {
    if (zoom < numPages) {
      zoomControl(+0.1);
    }
  };

  const setChatData = (textMessage: string, from: string) => {
    const input: ChatData = {
      from: from,
      message: textMessage,
    };
    setDisplayChat((data) => [...data, input]);
  };

  const registerQuestionChat = () => {
    if (message != "" && src != "") {
      setChatData(message, "client");
      setQuery(message);
      setMessage("");
    }
  };

  useEffect(() => {
    if (query) {
      get();
    }

    async function get() {
      setLoadingChat(true);
      console.log(src);
      const inputForm: RegisterQuestion = {
        src: src,
        messages: JSON.stringify([{ role: "user", content: query }]),
        referenceSources: true,
      };
      await chatpdf.registerQuestion(inputForm, (result: ResponseQuestion) => {
        setChatData(result.content, "server");
        setLoadingChat(false);
      });
    }
  }, [query]);

  useEffect(() => {
    if (messagesColumnRef.current !== null) {
      messagesColumnRef.current.scrollTop =
        messagesColumnRef.current.scrollHeight;
    }
  }, [dataChat]);

  useEffect(() => {
    if (displayChat) {
      setDataChat(displayChat);
    }
  }, [displayChat]);

  const registerQuestionByUpload = (input: File) => {
    setLoadingPdf(true);
    if (input) {
      const inputForm: RegisterByUpload = {
        file: input,
      };
      setFromFile(true);
      chatpdf.registerBookByUploadFIle(
        inputForm,
        (response: ResponseUpload) => {
          setSrc(response.sourceId);
          setDisplayChat([]);
          setLoadingPdf(false);
          setChatData(`Hi ${username}, How may i help you?`, "server");
        }
      );
    }
  };

  useEffect(() => {
    if (downloadPdf) {
      registerQuestionByUrl();
      setDownloadPdf(false);
    }
  }, [downloadPdf]);

  const registerQuestionByUrl = () => {
    if (url != "" && title != "") {
      setLoadingPdf(true);
      const inputForm: RegisterQuestionByUrl = {
        url: url,
        title: title,
      };

      setFromFile(false);
      chatpdf.registerQuetionByURL(inputForm, (response: ResponseUpload) => {
        setDisplayChat([]);
        setSrc(response.sourceId);
        setLoadingPdf(false);
      });
    }
  };

  return (
    <>
      <div className="absolute md:top-[582px] top-[35px] w-min">
        <ChatBodyMobile
          loadingPdf={loadingPdf}
          dataChat={dataChat}
          message={message}
          setMessage={setMessage}
          registerQuestionChat={registerQuestionChat}
          loading={loadingChat}
          setFile={setFile}
          registerQuestionByUpload={registerQuestionByUpload}
        />
        <ChatWeb
          dataChat={dataChat}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
          fromFile={fromFile}
          file={file}
          title={title}
          numPages={numPages}
          zoomOut={zoomOut}
          zoomIn={zoomIn}
          reload={reload}
          visiblePages={visiblePages}
          url={url}
          onDocumentLoadSuccess={onDocumentLoadSuccess}
          setPageVisibility={setPageVisibility}
          zoom={zoom}
          loadingPdf={loadingPdf}
          message={message}
          setMessage={setMessage}
          registerQuestionChat={registerQuestionChat}
          loadingChat={loadingChat}
          setFile={setFile}
          registerQuestionByUpload={registerQuestionByUpload}
          setUrl={setUrl}
          setTitle={setTitle}
          setDownloadPdf={setDownloadPdf}
        />
      </div>
    </>
  );
};

export default CardChat;
