import ReactLoading from "react-loading";

const ComponentReactLoading = ({ height, width, addClass }: any) => {
  return (
    <div
      className={`w-[${width}px] h-[${height}px] grid justify-items-center content-center ${addClass}`}
    >
      <ReactLoading
        type="spinningBubbles"
        color="#4382d8"
        height={width / 3}
        width={width / 3}
      />
    </div>
  );
};

export default ComponentReactLoading;
