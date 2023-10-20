import ComponentReactLoading from "../loading/ComponentReactLoading";

const ChatBodyMobile = ({
  dataChat,
  ref,
  message,
  setMessage,
  registerQuestionChat,
  loading,
}: any) => {
  return (
    <div className="justify-self-start relative pl-[12px] mt-[72px]">
      <div
        ref={ref}
        className="flex overflow-auto flex-col gap-y-[12px] w-[410px] h-[726px] pb-14 border-[#9cb4c6] border-[1px] rounded-[10px] px-[12px] pt-[23px]"
      >
        {dataChat?.length !== 0
          ? dataChat?.map((item, index) => {
              if (item.from == "client") {
                return (
                  <div
                    key={index.toString()}
                    className="bg-[#047ac0] rounded-[20px] self-end text-white text-[14px] py-[13px] px-[24px] max-w-[341px]"
                  >
                    {item.message}
                  </div>
                );
              } else {
                return (
                  <div
                    key={index.toString()}
                    className="bg-[#F3F3F3] rounded-[20px] self-start text-black text-[14px] py-[13px] px-[24px] max-w-[341px]"
                  >
                    {item.message}
                  </div>
                );
              }
            })
          : null}
      </div>
      <div className="absolute bottom-[6px] right-[20px]">
        <div className="h-[46px] w-[376px] rounded-[25px] relative bg-[#F3F3F3]">
          <input
            type="text"
            placeholder="Ask any question"
            className="block w-full text-black mx-[18px] pt-[10px] focus:outline-none bg-transparent pr-12"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            type="button"
            onClick={() => registerQuestionChat()}
            className="absolute inset-y-0 right-0 flex items-center mr-[10.49px] border-none focus:outline-none"
          >
            <img src={imgSend} className="h-[27px] w-[27px]"></img>
          </button>
          {loading ? (
            <ComponentReactLoading
              width={100}
              height={100}
              addClass={"absolute right-0 bottom-[15%]"}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ChatBodyMobile;
