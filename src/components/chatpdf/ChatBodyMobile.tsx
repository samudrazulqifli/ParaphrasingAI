import ComponentReactLoading from "../loading/ComponentReactLoading";
import imgSend from "../../assets/images/btn_send.png";
import imgUpPdf from "../../assets/images/upload_pdf.png";
import { JSXElementConstructor, Key, ReactElement, ReactNode, useEffect, useRef } from "react";

const ChatBodyMobile = ({
  loadingPdf,
  dataChat,
  message,
  setMessage,
  registerQuestionChat,
  loading,
  setFile,
  registerQuestionByUpload,
}: any) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const messagesColumnRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <div className="justify-self-start md:hidden block relative pl-[12px] mt-[72px]">
      {loadingPdf ? (
        <ComponentReactLoading width={187} height={295} addClass={"absolute"} />
      ) : null}
      <div
        ref={messagesColumnRef}
        className="flex overflow-auto scrollbar-hide flex-col gap-y-[12px] border-[0.5px] border-gray-500 w-[187px] h-[295px] pb-14 bg-white rounded-[6px] px-[12px] pt-[23px]"
      >
        {dataChat?.length !== 0
          ? dataChat?.map((item: { from: string; message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }, index: { toString: () => Key | null | undefined; }) => {
              if (item.from == "client") {
                return (
                  <div
                    key={index.toString()}
                    className="bg-[#047ac0] rounded-[5px] self-end text-white text-[5.83px] py-[5px] px-[6px] max-w-[341px]"
                  >
                    {item.message}
                  </div>
                );
              } else {
                return (
                  <div
                    key={index.toString()}
                    className="bg-[#F3F3F3] rounded-[5px] self-start text-black text-[5.83px] py-[5px] px-[6px] max-w-[341px]"
                  >
                    {item.message}
                  </div>
                );
              }
            })
          : null}
      </div>
      <div className="bg-white absolute bottom-0 w-[184px] m-[2px] h-14 rounded-[6px]"></div>
      <div className="absolute bottom-[33px] text-[5.41px] right-[3px]">
        <div className="h-[21.9px] w-[179px] rounded-[11.9px] relative bg-[#F3F3F3]">
          <input
            type="text"
            placeholder="Ask any question"
            className="block w-full text-black mx-[5px] pt-[8px] focus:outline-none bg-transparent pr-12"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            type="button"
            onClick={() => registerQuestionChat()}
            className="absolute inset-y-0 right-3 flex items-center border-none focus:outline-none"
          >
            <img src={imgSend} className="h-[7.5px] w-[7.5px]"></img>
          </button>
          {loading ? (
            <ComponentReactLoading
              width={70}
              height={70}
              addClass={"absolute right-0 bottom-[15%]"}
            />
          ) : null}
        </div>
      </div>
      <div className="absolute bottom-0 left-[43%]">
        <button
          type="button"
          onClick={handleClick}
          className="border-none focus:outline-none"
        >
          <img src={imgUpPdf} className="mx-auto w-[20%] h-[16%]" />
          <div className="text-black text-[3.04px]">Browse PDF</div>
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
      </div>
    </div>
  );
};

export default ChatBodyMobile;
