import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import TextSummarize from '../pages/TextSummarize'
import TextImprovement from '../pages/TextImprovement'
import TextParapharse from '../pages/TextParapharse'
import ChatPdf from '../pages/ChatPdf'

const MainPage = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='chat_pdf' element={<ChatPdf></ChatPdf>}></Route>
        <Route path='text_summarize' element={<TextSummarize></TextSummarize>}></Route>
        <Route path='text_improvement' element={<TextImprovement></TextImprovement>}></Route>
        <Route path='text_parapharse' element={<TextParapharse></TextParapharse>}></Route>
    </Routes>
    </>
  )
}

export default MainPage