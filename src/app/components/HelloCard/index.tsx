"use client";

import React, { useEffect, useRef } from "react";
import BGImage from "@/assets/images/bg.jpg";
import Typed from "typed.js";

const HelloCard: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  let typed: Typed | null = null;

  useEffect(() => {
    if (typedRef.current && typed === null) {
      typed = new Typed(typedRef.current, {
        strings: [
          "I am a frond-end developer.",
          "I am building Web APP.",
          "I am very interesting in electric games.",
        ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        loopCount: Infinity,
        cursorChar: "|",
        autoInsertCss: true,
      });
    }
  }, [typedRef]);

  return (
    <div
      style={{
        backgroundImage: `url(${BGImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-80 shadow-lg flex flex-col items-center justify-center"
    >
      <p className=" text-white font-bold text-4xl">
        Discover my Amazing Art Space!
      </p>
      <p className="text-white mt-5 text-md">
        &lt;<span className="text-primary">code</span>&gt;
        <span className=" font-mono" ref={typedRef}></span> &lt;
        <span className="text-primary">code</span>&gt;
      </p>
    </div>
  );
};

export default HelloCard;
