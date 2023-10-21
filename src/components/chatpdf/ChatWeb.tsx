import React, { useEffect, useRef } from "react";
import HeaderPdfView from "./HeaderPdfView";
import PdfView from "./PdfView";
import ChatBody from "./ChatBody";
import InputChat from "./InputChat";
import FileUrlModal from "../modal/FileUrlModal";
import imgUpPdf from "../../assets/images/upload_pdf.png";

const ChatWeb = ({
  dataChat,
  handleDragOver,
  handleDrop,
  fromFile,
  file,
  title,
  numPages,
  zoomOut,
  zoomIn,
  reload,
  visiblePages,
  url,
  onDocumentLoadSuccess,
  setPageVisibility,
  zoom,
  loadingPdf,
  message,
  setMessage,
  registerQuestionChat,
  loadingChat,
  setFile,
  registerQuestionByUpload,
  setUrl,
  setTitle,
  setDownloadPdf,
}: any) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const messagesColumnRef = useRef<HTMLDivElement>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    ref.current?.click();
  };
  useEffect(() => {
    if (messagesColumnRef.current !== null) {
      messagesColumnRef.current.scrollTop =
        messagesColumnRef.current.scrollHeight;
    }
  }, [dataChat]);
  return (
    <div
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)}
      onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e)}
      className="md:h-[936px] md:block hidden md:w-[895px] bg-white mx-auto rounded-[20px] shadow-md"
    >
      <div className="grid md:grid-cols-2 grid-cols-1 justify-items-stretch divide-x-[2px] divide-[#D9D9D9]">
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
            loading={loadingPdf}
          />
        </div>
        <div className="justify-self-start relative pl-[12px] mt-[72px]">
          <ChatBody dataChat={dataChat} ref={messagesColumnRef} />
          <InputChat
            message={message}
            setMessage={setMessage}
            registerQuestionChat={registerQuestionChat}
            loading={loadingChat}
          />
        </div>
      </div>
      <img src={imgUpPdf} className="mx-auto w-[20.57px] h-[24px] mt-[32px]" />
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
          accept="application/pdf"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files != null && event.target.files[0] != null) {
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
  );
};

export default ChatWeb;
