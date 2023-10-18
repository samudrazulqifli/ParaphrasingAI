import { Document, pdfjs } from "react-pdf";
import PageWithObserver from "./PageWithObserver";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfView = ({
  fromFile,
  file,
  url,
  onDocumentLoadSuccess,
  numPages,
  setPageVisibility,
  zoom,
}: any) => {
  return (
    <>
      <div className="w-[410px] h-[726px] overflow-auto border-[#9cb4c6] border-[1px] rounded-[10px] px-[15px] py-[25px]">
        <Document
          file={fromFile ? file : `https://cors-anywhere.herokuapp.com/${url}`}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <PageWithObserver
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              setPageVisibility={setPageVisibility}
              zoom={zoom}
            />
          ))}
        </Document>
      </div>
    </>
  );
};

export default PdfView;
