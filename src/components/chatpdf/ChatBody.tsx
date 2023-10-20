import React from "react";
import { BodyChat } from "../../interface/ChatData";

const ChatBody: React.FC<BodyChat> = (props: BodyChat) => {
  const { dataChat, ref } = props;
  return (
    <>
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
    </>
  );
};

export default ChatBody;
