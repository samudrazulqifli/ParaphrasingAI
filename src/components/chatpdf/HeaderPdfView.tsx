import imageReload from "../../assets/images/reload_page.png";
import zoomOutImg from "../../assets/images/zoomout.png";
import zoomInImg from "../../assets/images/zoomin.png";

const HeaderPdfView = ({
  fromFile,
  file,
  title,
  numPages,
  zoomOut,
  zoomIn,
  reload,
  visiblePages,
}: any) => {
  return (
    <>
      <div className="flex items-center justify-between mt-[37px] mb-[15px]">
        <div className="flex items-center gap-2">
          <div className="h-[15px] w-[16px] bg-black rounded-[2px] border-[1px] border-[#838383]"></div>
          <div className="text-[14px] truncate ... w-[200px] font-semibold text-black">
            {fromFile ? file?.name?.toString() : title}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="inset-y-0 right-0 border-none focus:outline-none p-0"
            onClick={() => zoomOut()}
            type="button"
          >
            <img src={zoomOutImg} alt="" className="w-[11px]" />
          </button>
          <button
            className="inset-y-0 right-0 border-none focus:outline-none p-0"
            onClick={() => reload()}
            type="button"
          >
            <img src={imageReload} alt="" className="w-[12.96px] h-[11.79px]" />
          </button>
          <button
            className="inset-y-0 right-0 border-none focus:outline-none p-0"
            onClick={() => zoomIn()}
            type="button"
          >
            <img src={zoomInImg} alt="" className="w-[11px]" />
          </button>
          <div className="h-[18px] px-2 bg-[#ECECEC] rounded-[2px]">
            <div className="text-[12px] font-medium text-[#5A5A5A] text-center">
              {Object.entries(visiblePages)
                .filter(([_, value]) => value)
                .map(([key]) => key)
                .join(", ") || "0"}
            </div>
          </div>
          <div className="text-[12px] font-medium text-[#5A5A5A]">
            {`/${numPages}`}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPdfView;
