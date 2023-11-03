import { useEffect, useState } from "react";
import imgClose from "../../assets/images/close.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormLogin } from "../../interface/api/IFormInput";
import { login } from "../../redux/feature/auth";
import { useAppDispatch, useAppSelector } from "../../redux/feature/hooks";
import ComponentReactLoading from "../loading/ComponentReactLoading";
import { LiaEyeSolid, LiaEyeSlash } from "react-icons/lia";

const LoginModal = ({ showLogin, setShowLogin, setShowRegister }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormLogin>();
  const { loading, finish, failed, isLoggedIn } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [stateUsername, setStateUsername] = useState<string>("");
  const [statePassword, setStatePassword] = useState<string>("");
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (statePassword != "" && stateUsername != "") {
      console.log("masuk");
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [stateUsername, statePassword]);

  useEffect(() => {
    if (showLogin == false) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
      if (localStorage.getItem("rememberme") == "true") {
        setValue("username", localStorage.getItem("username") ?? "");
        setValue("password", localStorage.getItem("password") ?? "");
        setValue("rememberme", true);
      }
    }
    return () => {};
  }, [showLogin]);

  useEffect(() => {
    if (finish && !failed && isLoggedIn) {
      setShowLogin(false);
    }
  }, [finish]);

  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    dispatch(login(data));
  };

  return (
    <>
      {showLogin ? (
        <>
          <div className="justify-center text-black items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
              className="w-[330px] mx-auto mt-[3%] px-[19px] bg-white rounded-md shadow-sm font-poppins relative"
            >
              <button
                type="button"
                onClick={() => {
                  setShowLogin(false);
                }}
                className="p-0 md:h-[22.64px] h-[15px] md:w-[22.64px] w-[15px] inset-y-0 border-none focus:outline-none absolute md:top-[5.22px] top-[2.01px] md:right-[18.39px] right-[7.78px]"
              >
                <img src={imgClose} alt="" />
              </button>
              <div className="text-[20px] text-center mt-[16px] mb-[66px] font-bold text-[#1C1C1C]">
                Log in
              </div>
              <div className="text-[15.23px] font-bold text-[#1C1C1C] mb-[6.15px]">
                Username
              </div>
              <input
                autoComplete="off"
                {...register("username", {
                  required: "Username is required",
                  // shouldUnregister: true,
                })}
                onFocus={(e) => setStateUsername(e.target.value)}
                onChange={(e) => setStateUsername(e.target.value)}
                type="text"
                defaultValue={localStorage.getItem("username")!}
                placeholder="Enter Your Username"
                className="w-full rounded-[3.17px] h-[42.52px] bg-white text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
              />
              {errors.username && (
                <p role="alert" className="text-red-600">
                  {errors.username.message}
                </p>
              )}
              <div className="text-[15.23px] font-bold text-[#1C1C1C] mt-[8.5px] mb-[5.89px]">
                Password
              </div>
              <div className="relative">
                <input
                  autoComplete="new-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="w-full rounded-[3.17px] h-[42.52px] bg-white text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Minimum 8 Characters required",
                    },
                    maxLength: {
                      value: 20,
                      message: "Maximum 20 Characters required",
                    },
                    // shouldUnregister: true,
                  })}
                  defaultValue={localStorage.getItem("password")!}
                  onFocus={(e) => {
                    setStatePassword(e.target.value);
                  }}
                  onChange={(e) => {
                    setStatePassword(e.target.value);
                  }}
                ></input>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[16%] left-[85%]"
                >
                  {!showPassword ? (
                    <LiaEyeSlash fontSize="1.5em" />
                  ) : (
                    <LiaEyeSolid fontSize="1.5em" />
                  )}
                </button>
                {errors.password && (
                  <p role="alert" className="text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-x-[1.9px] mt-[8.5px] mb-[9.16px]">
                <input
                  type="checkbox"
                  className="appearance-none h-4 w-4 rounded-sm cursor-pointer bg-white border border-black text-black focus:ring-2"
                  {...register("rememberme")}
                />
                <div className="text-[15.23px] mr-1 text-[#1C1C1C] font-normal">
                  Remember Me
                </div>
              </div>
              <button
                type="submit"
                className={`h-[42.52px] w-full rounded-[3.17px] text-white text-[15.23px] font-bold border-none ring-0 focus:outline-none ${
                  disableButton ? "btn-disabled bg-gray-500" : "bg-[#3495CE]"
                }`}
              >
                Log in
              </button>
              <div className="text-[15.23px] text-[#1C1C1C] mt-[26.82px] font-normal text-center">
                Don’t have an account?
              </div>
              <div className="grid">
                <button
                  type="button"
                  onClick={() => {
                    setShowRegister(true);
                    setShowLogin(false);
                  }}
                  className="text-[#3495CE] justify-self-center text-center bg-transparent font-bold p-0 border-none ring-0 focus:outline-none text-[15.23px] mb-6"
                >
                  Sign up
                </button>
              </div>
            </form>
            {loading ? (
              <ComponentReactLoading
                height={700}
                width={700}
                addClass={"mx-auto absolute"}
              />
            ) : null}
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default LoginModal;
