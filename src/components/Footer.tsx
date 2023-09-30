import logo from "../images/documentorai-05 3.svg";
const Footer = () => {
  return (
    <>
      <div className="footer-font bg-gradient-to-r from-[#047AC0]  to-[#00FFD1] w-[390px] h-[118.px]">
        <div className="grid grid-cols-3 gap-4">
          <div className="my-3 mx-3">
            <div>
              <img
                src={logo}
                alt="logo"
                className="w-[18px] h-[11px] top-[1132px] left-[12px]"
              />
              <p className="text-[4px] my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                saepe laborum error necessitatibus accusamus, aperiam dolores
                quae! Quae dolorum numquam aut at?
              </p>
            </div>
          </div>
          <div className="ml-5 my-3 mx-3">
            <h1 className="text-[6.25px] font-bold">Navigation</h1>
            <ul>
              <li className="h-[14px]">
                <a href="/" className="text-white text-[4.69px] font-medium">
                  Chat Pdf
                </a>
              </li>
              <li className="h-[14px]">
                <a href="/" className="text-white text-[4.69px] font-medium">
                  Text Paraphase
                </a>
              </li>
              <li className="h-[14px]">
                <a href="/" className="text-white text-[4.69px] font-medium">
                  Text Summarize
                </a>
              </li>
              <li className="h-[14px]">
                <a href="/" className="text-white text-[4.69px] font-medium">
                  Text Improvement
                </a>
              </li>
              <li>
                <a href="/" className="text-white text-[4.69px] font-medium">
                  Advertisement
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-5 my-3 mx-3">
            <h1 className="text-[6.25px] font-bold">Contact Us</h1>
            <ul>
              <li className="h-[14px]">
                <a href="/" className="text-white text-[4.69px] font-medium">
                  5900 balcones Drive, STE 100 Austin
                </a>
              </li>
              <li className="h-[14px]">
                <a href="/" className="text-white text-[4.69px] font-medium">
                  info@gmail .com
                </a>
              </li>
              <li className="h-[14px]">
                <a href="/" className="text-white text-[4.69px] font-medium">
                  +1 (407) 777-4212
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <hr className="mt-2 mx-3" />
          <div className="flex justify-end mx-3">
            <ul>
              <li>
                <a href="/" className="text-white text-[4.69px] font-medium">
                  Terms of Use
                </a>
                <a href="/" className="text-white text-[4.69px] font-medium">
                  Privacy Policy
                </a>
                <a href="/" className="text-white text-[4.69px] font-medium">
                  2021-2023 DocumentorAI . All rights reserved.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
