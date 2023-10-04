import { useState } from "react";
import imgSend from "../assets/images/btn_send.png";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ChatPage = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  return (
    <>
      <div className="w-full bg-orange-400 py-10">
        <div className="h-[936px] w-[895px] bg-white mx-auto rounded-[20px]">
          <div className="grid grid-cols-2 justify-items-center ">
            <div className="w-[410px] max-h-[726px] border-[#9cb4c6] border-[1px] rounded-[10px] ">
              {pageNumber < numPages && (
                <button
                  className="bg-yellow-300"
                  type="button"
                  onClick={changePageNext}
                >
                  Next Page
                </button>
              )}
              {pageNumber > 1 && (
                <button onClick={changePageBack}>Previous Page</button>
              )}
              <Document
                file="/sample.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page
                  width={373}
                  pageNumber={pageNumber}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                ></Page>
              </Document>
            </div>
            <div className="flex flex-col gap-y-[12px] w-[410px] h-[726px] border-[#9cb4c6] border-[1px] rounded-[10px] px-[12px] pt-[23px] relative">
              <div className="bg-[#F3F3F3] rounded-[20px] self-start text-black text-[14px] py-[13px] px-[24px] max-w-[341px]">
                Our AI-powered summarization tool swiftly generates brief and
                to-the-point
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
                    className="absolute inset-y-0 right-0 flex items-center mr-[10.49px]"
                  >
                    <img src={imgSend} className="h-[27px] w-[27px]"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
