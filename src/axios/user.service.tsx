import axios from "axios";
import { IFormDelete, IFormPassword } from "../interface/api/IFormInput";
import Swal from "sweetalert2";

// eslint-disable-next-line react-refresh/only-export-components
const URL = "https://api.documentorai.com/";

const changePassword = async (body: IFormPassword, cb: any) => {
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

const deleteAccount = async (body: IFormDelete, cb: any) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axios({
          method: "DELETE",
          url: URL + "account",
          data: body,
          headers: {
            Authorization: localStorage.token,
          },
        });

        cb(result.data.data);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const user = {
  changePassword,
  deleteAccount,
};

export default user;
