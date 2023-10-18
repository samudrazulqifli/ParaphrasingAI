import axios from "axios";
import { ImprovementInput } from "../interface/api/IFormInput";


const textImprovement = async (data: ImprovementInput, cb: any) => {
  try {
    const result = await axios({
        method: "POST",
        url: "https://api.documentorai.com/book/text",
        data: data,
        headers: {
            Authorization: localStorage.token,
        }
    });
    cb(result.data.data)
    console.log(data.intent)
    console.log(result)
  } catch (erorr) {
    console.log(console.error());
  }
};

export {textImprovement}
