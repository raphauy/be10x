import Image from "next/image";
import React from "react";

export default function Titles() {
  return (
    <div className="flex items-center">
      <h1 className="pr-5 text-5xl font-bold text-center text-orange-be10x">
        Learn to use <br className="sm:hidden" />
        <span className="text-white underline">AI Tools &amp; ChatGPT</span>
      </h1>

      <Image 
        className="hidden sm:block"
        src="/chatgpt.png"
        width={65}
        height={65}
        alt="ChatGPT image"
      />
    </div>
  );
}
