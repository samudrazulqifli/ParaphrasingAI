import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import TextSummarize from "../pages/TextSummarize";
import TextImprovement from "../pages/TextImprovement";
import TextParapharse from "../pages/TextParapharse";
import ChatPdf from "../pages/ChatPdf";
import TermsUseAndPolicy from "../pages/TermsUseAndPolicy";

const MainPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="chatPdf" element={<ChatPdf></ChatPdf>}></Route>
        <Route
          path="textSummarize"
          element={<TextSummarize></TextSummarize>}
        ></Route>
        <Route
          path="textImprovement"
          element={<TextImprovement></TextImprovement>}
        ></Route>
        <Route
          path="textParapharse"
          element={<TextParapharse></TextParapharse>}
        ></Route>
        <Route path="termsUse&Policy" element={<TermsUseAndPolicy />} />
      </Routes>
    </>
  );
};

export default MainPage;
