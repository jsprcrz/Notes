import React from "react";

import { overleaf, notion, onenote } from "../../Assets";
import { RoughNotation } from "react-rough-notation";

const Hero = () => {
  return (
    <div id="home" className="mb-[4rem] mt-[2rem]">
      <h1 className="text-textColor text-[16px] pb-[3rem] font-light  block">
        Here you'll find a compilation of{" "}
        <RoughNotation type="underline" show={true} color="#e84f4f">
          my personal notes
        </RoughNotation>{" "}
        on various topics that I've taken throughout university. I hope you find
        these notes helpful and informative.
      </h1>

      <div className="sm:grid hidden gap-[3rem] grid-cols-2 grid-flow-col ms-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#ecf5ea] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={overleaf} alt="Notion Logo" className="w-[18px]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Overleaf
            </span>
          </div>
          <p className="text-[14px] text-textColor opacity-[.7] py-[1rem] font font-semibold">
            A cloud-based LaTeX editor I've used to make most of my notes (with
            <a
              className="text-green-800"
              href="https://www.latextemplates.com/template/legrand-orange-book"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <u>The Legrand Orange Book Template</u>
            </a>
            ).
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#e7e4e4] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[5px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={notion} alt="Notion Logo" className="w-[18px]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Notion
            </span>
          </div>
          <p className="text-[14px] text-textColor opacity-[.7] py-[1rem] font font-semibold">
            Slowly transitioned to Notion for most of my note-taking due to its
            flexibility and versatility.
          </p>
        </div>
      </div>

      {/* For small devices */}
      <div className="sm:hidden grid gap-[3rem] grid-rows-2 grid-flow-col ms-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#ecf5ea] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={overleaf} alt="Notion Logo" className="w-[18px]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Overleaf
            </span>
          </div>
          <p className="text-[14px] text-textColor opacity-[.7] py-[1rem] font font-semibold">
            A cloud-based LaTeX editor I've used to make most of my notes (with
            <a
              className="text-green-800"
              href="https://www.latextemplates.com/template/legrand-orange-book"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <u>The Legrand Orange Book Template</u>
            </a>
            ).
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#e7e4e4] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[5px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={notion} alt="Notion Logo" className="w-[18px]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Notion
            </span>
          </div>
          <p className="text-[14px] text-textColor opacity-[.7] py-[1rem] font font-semibold">
            Slowly transitioned to Notion for most of my note-taking due to its
            flexibility and versatility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
