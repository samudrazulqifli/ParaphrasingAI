import { useEffect, useState } from "react";
// import imgPDF from "../../assets/images/uploaded_pdf.png";
import imgClose from "../../assets/images/close.png";
import { logout } from "../../redux/feature/auth";
import { useAppDispatch, useAppSelector } from "../../redux/feature/hooks";
import { IFormDelete } from "../../interface/api/IFormInput";
import userService from "../../axios/user.service";
import FormChangePassword from "./FormChangePassword";
// import { ResponseListBook } from "../../interface/api/Response";

export const ProfileModal = () => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  // const [data, setData] = useState<ResponseListBook[]>([]);
  const { username, uuid } = useAppSelector((state) => state.auth);

  const logoutUser = () => {
    dispatch(logout());
    setShowModal(false);
  };

  const deleteAccount = async () => {
    if (uuid) {
      const input: IFormDelete = {
        uuid: uuid,
      };
      await userService.deleteAccount(input, (result: string) => {
        if (result == "OK") {
          logoutUser();
        }
      });
    }
  };

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     userService.getListBook(0, 3, (result: ResponseListBook[]) => {
  //       setData(result);
  //     });
  //   }
  // }, [isLoggedIn]);

  useEffect(() => {
    if (showModal == false) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {};
  }, [showModal]);

  return (
    <>
      <button
        type="button"
        className="inset-y-0 flex items-center mr-[10.49px] border-none focus:outline-none"
        onClick={() => setShowModal(true)}
      >
        Hi {username}
      </button>
      {showModal ? (
        <>
          <div className="items-start flex justify-end overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative md:w-2/6 w-4/6 mt-[4%] mr-[5%] rounded-[11.81px] md:h-[391.94px] h-[156.92px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="p-0 md:h-[22.64px] h-[15px] md:w-[22.64px] w-[15px] inset-y-0 border-none focus:outline-none absolute md:top-[20px] top-[10px] md:right-[18.39px] right-[7.78px]"
                >
                  <img src={imgClose} alt="" />
                </button>
                <div className="text-black border-2 border-[#d9d9d9] rounded-md mt-[10%] mx-[3vw] p-[2%]">
                  <div className="text-[#626262] md:text-[1.2vw] text-[3vw]">
                    Your Name
                  </div>
                  <div className="text-[#222222E5] md:text-[1.2vw] text-[3vw]">
                    {username}
                  </div>
                  <div className="text-[#626262] md:text-[1.2vw] text-[3vw]">
                    Your Name
                  </div>
                  <div className="text-[#222222E5] md:text-[1.2vw] text-[3vw]">
                    {username}
                  </div>
                  <div className="text-[#626262] md:text-[1.2vw] text-[3vw]">
                    Password
                  </div>
                  <div className="text-[#222222E5] md:text-[1.2vw] text-[3vw]">
                    *********
                  </div>
                </div>
                {/* pdf uploaded */}
                {/* <div className="text-black border-2 border-[#d9d9d9] rounded-md mt-[3%] mx-[3vw] p-[2%]">
                  <div className="text-black">PDF Uploaded</div>
                  <div className="flex">
                    {data.map((_, idx) => {
                      return (
                        <img
                          key={idx.toString()}
                          src={imgPDF}
                          className="w-[25%] h-[30%]"
                          alt=""
                        />
                      );
                    })}
                  </div>
                </div> */}
                <div className="text-black border-2 border-[#d9d9d9] rounded-md mx-[3vw] mt-[3%] mb-[10%] p-[2%]">
                  <div className="text-[#222222E5] md:text-[1.4vw] text-[3vw]">
                    Device
                  </div>
                  <button
                    type="button"
                    className="p-0 text-[#222222E5] md:text-[1.2vw] text-[3vw] border-none focus:outline-none"
                    onClick={() => logoutUser()}
                  >
                    Logout
                  </button>
                  <br />
                  <button
                    type="button"
                    className="p-0 text-[#222222E5] md:text-[1.2vw] text-[3vw] border-none focus:outline-none"
                    onClick={() => deleteAccount()}
                  >
                    Delete Account
                  </button>
                  <br />
                  <button
                    type="button"
                    className="p-0 text-[#222222E5] md:text-[1.2vw] text-[3vw] border-none focus:outline-none"
                    onClick={() => setChangePassword(true)}
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          <FormChangePassword
            visible={changePassword}
            setVisible={setChangePassword}
          />
        </>
      ) : null}
    </>
  );
};
