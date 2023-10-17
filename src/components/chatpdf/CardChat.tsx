import { useState, useRef, useEffect, useCallback } from "react";
import imgUpPdf from "../../assets/images/upload_pdf.png";

import {
  RegisterByUpload,
  RegisterQuestion,
  RegisterQuestionByUrl,
  ResponseQuestion,
  ResponseUpload,
} from "../../interface/api/FormChatPdf";
import chatpdf from "../../axios/chatpdf.service";
import { ChatData } from "../../interface/ChatData";
import FileUrlModal from "../modal/FileUrlModal";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import ChatBody from "./ChatBody";
import InputChat from "./InputChat";
import PdfView from "./PdfView";
import HeaderPdfView from "./HeaderPdfView";

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
      console.log(src);
      const inputForm: RegisterQuestion = {
        src: src,
        messages: JSON.stringify([{ role: "user", content: query }]),
        referenceSources: true,
      };
      await chatpdf.registerQuestion(inputForm, (result: ResponseQuestion) => {
        setChatData(result.content, "server");
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
      const inputForm: RegisterQuestionByUrl = {
        url: url,
        title: title,
      };

      setFromFile(false);
      chatpdf.registerQuetionByURL(inputForm, (response: ResponseUpload) => {
        setDisplayChat([]);
        setSrc(response.sourceId);
      });
    }
  };

  return (
    <>
      <div className="absolute top-[582px] w-full">
        <div className="relative">
          <div
            onDragOver={(e: React.DragEvent<HTMLDivElement>) =>
              handleDragOver(e)
            }
            onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e)}
            className="h-[936px] w-[895px] bg-white mx-auto rounded-[20px] shadow-md"
          >
            <div className="grid grid-cols-2 justify-items-stretch divide-x-[2px] divide-[#D9D9D9]">
              <div className="justify-self-end hidden md:block pr-[12px]">
                <HeaderPdfView
                  fromFile={fromFile}
                  file={file}
                  title={title}
                  numPages={numPages}
                  zoomOut={zoomOut}
                  zoomIn={zoomIn}
                  reload={reload}
                  visiblePages={visiblePages}
                />
                <PdfView
                  fromFile={fromFile}
                  file={file}
                  url={url}
                  onDocumentLoadSuccess={onDocumentLoadSuccess}
                  numPages={numPages}
                  setPageVisibility={setPageVisibility}
                  zoom={zoom}
                />
              </div>
              <div className="justify-self-start relative pl-[12px] mt-[72px]">
                <ChatBody dataChat={dataChat} ref={messagesColumnRef} />
                <InputChat
                  message={message}
                  setMessage={setMessage}
                  registerQuestionChat={registerQuestionChat}
                />
              </div>
            </div>
            <img
              src={imgUpPdf}
              className="mx-auto w-[20.57px] h-[24px] mt-[32px]"
            />
            <div className="text-[10px] text-black font-bold text-center mt-[10px]">
              Drop PDF Here
            </div>
            <div className="flex justify-between mx-[52px]">
              <button
                type="button"
                onClick={handleClick}
                className="text-[#047AC0] p-0 text-[12px] font-medium inset-y-0 right-0 border-none focus:outline-none"
              >
                Browse my Computer
              </button>
              <input
                className="hidden"
                ref={ref}
                type="file"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (
                    event.target.files != null &&
                    event.target.files[0] != null
                  ) {
                    setFile(event.target.files[0]);
                    registerQuestionByUpload(event.target.files[0]);
                  }
                }}
              />
              <FileUrlModal
                setUrl={setUrl}
                setTitle={setTitle}
                setDownloadPdf={setDownloadPdf}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardChat;
