import axios from "axios";
import Swal from "sweetalert2";
import {
  RegisterByUpload,
  RegisterQuestion,
  RegisterQuestionByUrl,
} from "../interface/api/FormChatPdf";

// eslint-disable-next-line react-refresh/only-export-components
const URL = "https://api.documentorai.com/";

const registerQuestion = async (body: RegisterQuestion, cb: any) => {
  try {
    const result = await axios({
      method: "POST",
      url: URL + "book/question",
      data: body,
      headers: {
        Authorization: localStorage.token,
      },
    });

    cb(result.data.data);
  } catch (error) {
    console.log(error);
  }
};

const registerQuetionByURL = async (body: RegisterQuestionByUrl, cb: any) => {
  try {
    const result = await axios({
      method: "POST",
      url: URL + "book/upload/url",
      data: body,
      headers: {
        Authorization: localStorage.token,
      },
    });

    cb(result);
  } catch (error) {
    console.log(error);
  }
};

const registerBookByUploadFIle = async (body: RegisterByUpload, cb: any) => {
  try {
    const result = await axios({
      method: "POST",
      url: URL + "book/upload/file",
      data: body,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.token,
      },
    });
    Swal.fire("Success", "Chat is already to use", "success");
    cb(result.data.data);
  } catch (error) {
    Swal.fire("Error", "Error upload pdf", "error");
  }
};

const chatpdf = {
  registerQuestion,
  registerQuetionByURL,
  registerBookByUploadFIle,
};

export default chatpdf;
