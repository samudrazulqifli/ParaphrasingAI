import logo from "../images/documentorai-05 3.svg";
const Footer = () => {
  return (
    <>
      <div className="footer-font bg-gradient-to-r from-[#047AC0]  to-[#00FFD1] w-full h-[118.13px] md:h-[378px]">
        <div className="mx-auto flex justify-between gap-3 w-full md:h-[330px]">
          <div className="w-[150px] md:w-[350px] mr-auto">
            <div className="my-3 mx-3 md:my-8 md:mx-8">
              <img
                src={logo}
                alt="logo"
                className="w-[18px] h-[11px] md:w-[82px] md:h-[50px]"
              />
              <p className="text-[4px] md:text-[10px] my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing edivt. Maxime
                saepe laborum error necessitatibus accusamus, aperiam dolores
                quae! Quae dolorum numquam aut at?
              </p>
            </div>
          </div>
          <div className="my-3 ml-10 flex flex-col gap-[5px] w-[80px] md:gap-[20px] md:w-[240px] md:my-8 md:mx-8">
            <h1 className="text-[6.25px] md:text-[20px] font-bold">Navigation</h1>
            <a href="/" className="text-white text-[4.69px] md:text-[15px] font-medium">Chat Pdf</a>
            <a href="/" className="text-white text-[4.69px] md:text-[15px] font-medium">Text Paraphase</a>
            <a href="/" className="text-white text-[4.69px] md:text-[15px] font-medium">Text Summarize</a>
            <a href="/" className="text-white text-[4.69px] md:text-[15px] font-medium">Text Improvement</a>
            <a href="/" className="text-white text-[4.69px] md:text-[15px] font-medium">Advertisement</a>
          </div>
        <div className="my-3 flex flex-col gap-[5px] w-[100px] md:gap-[20px] md:w-[270px] mr-3 md:my-8 md:mx-8">
          <h1 className="text-[6.25px] md:text-[20px] font-bold">Contact Us</h1>
            <a href="/" className="text-white text-[4.69px] md:text-[15px] font-medium space-y-0">5900 balcones Drive, STE 100 Austin TX, USA 78731</a>
            <a href="/" className="text-white text-[4.69px] md:text-[15px] font-medium">info@gmail .com</a>
            <a href="/" className="text-white text-[4.69px] md:text-[15px] font-medium">+1 (407) 777-4212</a>
        </div>
        </div>
        <hr className="mx-3" />
        <div className=" flex justify-end gap-5 mx-3 mt-2">
              <a href="/" className="text-white text-[4.69px] md:text-[15px] font-medium ">Terms of Use</a>
              <a href="/" className="text-white text-[4.69px] md:text-[15px] font-medium mr-4 md:mr-36">Privacy Policy</a>
              <a href="/" className="text-white text-[4.69px] md:text-[15px] font-medium">2021-2023 DocumentorAI . All rights reserved.</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
