import React from "react";

import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer flex justify-between items-center p-[2rem] my-4 bg-blueColor rounded-[10px] m-auto">
      <div className="icons gap-4 py-[1rem] xs:flex hidden">
        <a href="mailto:crz.jasper@gmail.com">
          <AiFillMail className="bg-white p-[5px] h-[35px] w-[35px] rounded-full icon text-blueColor hover:bg-slate-300" />
        </a>
        <a href="https://linkedin.com/in/jasper-cruz/">
          <AiFillLinkedin className="bg-white p-[5px] h-[35px] w-[35px] rounded-full icon text-blueColor hover:bg-slate-300" />{" "}
        </a>
        <a href="https://github.com/jsprcrz/Notes">
          <AiFillGithub className="bg-white p-[5px] h-[35px] w-[35px] rounded-full icon text-blueColor hover:bg-slate-300" />{" "}
        </a>
      </div>

      <p className="text-gray-300 font-light">&copy; Jasper Cruz</p>
    </div>
  );
};

export default Footer;
