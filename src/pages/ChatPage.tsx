import { useState } from "react";
import imgSend from "../assets/images/btn_send.png";
import { Document, Page, pdfjs } from "react-pdf";
import imageReload from "../assets/images/reload_page.png";
import imagePrev from "../assets/images/prev_page.png";
import imgUpPdf from "../assets/images/upload_pdf.png";
import Iklan from "../components/Iklan";
import { FileUploader } from "react-drag-drop-files";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const ChatPage = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1);
  const [file, setFile] = useState<File>();

  const handleChange = (file: File) => {
    setFile(file);
  };

  const fileTypes = ["PDF"];

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

  return (
    <>
      <div className="w-full relative bg-orange-400 py-10">
        <Iklan />
        <div className="h-[936px] w-[895px] bg-white mx-auto rounded-[20px]">
          <div className="grid grid-cols-2 justify-items-stretch divide-x-[2px] divide-[#D9D9D9]">
            <div className="justify-self-end pr-[12px]">
              <div className="flex items-center justify-between mt-[37px] mb-[15px]">
                <div className="flex items-center gap-2">
                  <div className="h-[15px] w-[16px] bg-black rounded-[2px] border-[1px] border-[#838383]"></div>
                  <div className="text-[14px] font-semibold">
                    TYGENI-18-2023.pdf
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="inset-y-0 right-0 border-none focus:outline-none p-0"
                    onClick={() => zoomOut()}
                    type="button"
                  >
                    <img src={imagePrev} alt="" className="w-[11px]" />
                  </button>
                  <button
                    className="inset-y-0 right-0 border-none focus:outline-none p-0"
                    onClick={() => reload()}
                    type="button"
                  >
                    <img
                      src={imageReload}
                      alt=""
                      className="w-[12.96px] h-[11.79px]"
                    />
                  </button>
                  <button
                    className="inset-y-0 right-0 border-none focus:outline-none p-0"
                    onClick={() => zoomIn()}
                    type="button"
                  >
                    <img src={imagePrev} alt="" className="w-[11px]" />
                  </button>
                  <div className="h-[18px] w-[32px] bg-[#ECECEC] rounded-[2px]">
                    <div className="text-[12px] font-medium text-[#5A5A5A] text-center">
                      1
                    </div>
                  </div>
                  <div className="text-[12px] font-medium text-[#5A5A5A]">
                    {`/${numPages}`}
                  </div>
                </div>
              </div>
              <div className="w-[410px] h-[726px] overflow-auto border-[#9cb4c6] border-[1px] rounded-[10px] px-[15px] py-[25px]">
                <Document
                  file={file}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  {Array(numPages)
                    .fill(undefined)
                    .map((_, i: number) => {
                      return (
                        <Page
                          width={373}
                          pageNumber={i + 1}
                          renderAnnotationLayer={false}
                          renderTextLayer={false}
                          scale={zoom}
                        />
                      );
                    })}
                </Document>
              </div>
            </div>
            <div className="justify-self-start pl-[12px] mt-[72px]">
              <div className="flex flex-col gap-y-[12px] w-[410px] h-[726px] border-[#9cb4c6] border-[1px] rounded-[10px] px-[12px] pt-[23px] relative">
                <div className="bg-[#F3F3F3] rounded-[20px] self-start text-black text-[14px] py-[13px] px-[24px] max-w-[341px]">
                  ❤️️
                </div>
                <div className="bg-[#047ac0] rounded-[20px] self-end text-white text-[14px] py-[13px] px-[24px] max-w-[341px]">
                  Our AI-powered summarization tool swiftly generates brief and
                  to-the-point
                </div>
                <div className="absolute bottom-[6px]">
                  <div className="h-[46px] w-[376px] rounded-[25px] relative bg-[#F3F3F3]">
                    <input
                      type="text"
                      placeholder="Ask any question"
                      className="block w-full text-black mx-[18px] pt-[10px] focus:outline-none bg-transparent"
                    ></input>
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center mr-[10.49px] border-none focus:outline-none"
                    >
                      <img src={imgSend} className="h-[27px] w-[27px]"></img>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={imgUpPdf}
            className="mx-auto w-[20.57px] h-[24px] mt-[32px]"
          />
          <div className="text-[10px] font-bold text-center mt-[10px]">
            Drop PDF Here
          </div>
          <div className="flex justify-between mx-[52px]">
            <button
              type="button"
              className="text-[#047AC0] p-0 text-[12px] font-medium inset-y-0 right-0 border-none focus:outline-none"
            >
              Browse my Computer
            </button>
            <button
              type="button"
              className="text-[#047AC0] p-0 text-[12px] font-medium inset-y-0 right-0 border-none focus:outline-none"
            >
              From URL
            </button>
          </div>
          <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
