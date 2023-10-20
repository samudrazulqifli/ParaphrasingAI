import imgSend from "../../assets/images/btn_send.png";
import ComponentReactLoading from "../loading/ComponentReactLoading";

const InputChat = ({
  message,
  setMessage,
  registerQuestionChat,
  loading,
}: any) => {
  return (
    <>
      <div className="absolute bottom-[6px] right-[20px]">
        <div className="h-[46px] w-[376px] rounded-[25px] relative bg-[#F3F3F3]">
          <input
            type="text"
            placeholder="Ask any question"
            className="block w-full text-black mx-[18px] pt-[10px] focus:outline-none bg-transparent pr-12"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></input>
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
    </>
  );
};

export default InputChat;
