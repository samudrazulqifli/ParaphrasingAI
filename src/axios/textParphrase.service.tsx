import axios from "axios";
import { ParaphraseInput } from "../interface/api/IFormInput";


const textParaphrase = async (data: ParaphraseInput, cb: any) => {
  try {
    const result = await axios({
        method: "POST",
        url: "https://api.documentorai.com/book/paraphrase",
        data: data,
        headers: {
            Authorization: localStorage.token,
        }
    });
    cb(result.data)
  } catch (erorr) {
    console.log(console.error());
  }
};

export {textParaphrase}
