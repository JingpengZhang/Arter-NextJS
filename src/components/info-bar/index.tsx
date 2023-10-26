"use client";
import React, { useState } from "react";
import Image from "next/image";
import Avatar from "../../assets/images/face-1.jpg";
import { Icon } from "@iconify/react";
import Link from "next/link";
import useOutsideClick from "../../hooks/useOutsideClick";

const infoStyle =
  "w-full flex items-center justify-between mt-3 first-of-type:mt-0";

const spliteBarStyle = " w-full h-px bg-[#d5d5d7] my-5";

const InfoBar: React.FC = () => {
  const [show, setShow] = useState(false);

  const packUpInfoBar = () => {
    setShow(false);
  };

  const infoBarRef = useOutsideClick(packUpInfoBar);

  return (
    <section className="w-0 lg:w-72 duration-700 transition-all ">
      <div
        ref={infoBarRef}
        className={[
          "h-full w-72 bg-[#f4f4f6] shadow-lg duration-700 transition-all relative",
          show ? " translate-x-0" : " -translate-x-full lg:translate-x-0",
        ].join(" ")}
      >
        {/** 移动端展开信息栏开关 */}
        <button
          onClick={() =>
            setShow((prev) => {
              return !prev;
            })
          }
          className={[
            " duration-700 transition-all absolute top-0 lg:opacity-0 right-0 z-10 mr-4 h-16 flex items-center justify-center text-[#5c5c6d] hover:text-[#1c1c23]",
            show ? "translate-x-16 lg:translate-x-0" : "translate-x-16 ",
          ].join(" ")}
        >
          <Icon
            className=" cursor-pointer"
            width={20}
            icon="iconamoon:menu-kebab-vertical-bold"
          />
        </button>
        <div className="h-full flex items-center justify-between flex-col">
          <div className="w-full">
            {/** 头像所在白色区域 */}
            <div className="bg-white w-full h-60 flex items-center justify-center flex-col shadow">
              {/** 头像 */}
              <div className="">
                <div className="w-24 aspect-square rounded-full overflow-hidden">
                  <Image
                    src={Avatar}
                    alt="头像"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/** 昵称 */}
              <span className=" font-bold text-sm mt-3">JP Zhang</span>
              {/** 职业 */}
              <div className="mt-2">
                <span className=" text-xs text-gray-500">前端工程师</span>
              </div>
            </div>

            <div className="px-8 text-sm text-[#1e1e28]">
              <div className="mt-6">
                <div className={infoStyle}>
                  <span>省份:</span>
                  <span>安徽省</span>
                </div>
                <div className={infoStyle}>
                  <span>城市:</span>
                  <span>合肥市</span>
                </div>
                <div className={infoStyle}>
                  <span>年龄:</span>
                  <span>{new Date().getFullYear() - 2000}</span>
                </div>
              </div>
              <div className={spliteBarStyle}></div>
            </div>
          </div>
          <div className="bg-white h-12 w-full flex items-center justify-center text-[#5c5c6d]">
            <Link
              href={""}
              className="hover:text-[#1e1e28] duration-700 transition-all"
            >
              <Icon icon="mdi:github" width="18" />
            </Link>
          </div>
        </div>
      </div>
      {/** 遮罩 */}
      <div
        className={[
          " absolute duration-700 transition-opacity top-16 lg:top-0 left-72 w-[calc(100%-5rem)] lg:w-0 h-[calc(100%-4rem)] lg:h-0 bg-[rgba(0,0,0,0.4)]",
          show
            ? " translate-x-0 opacity-100"
            : " translate-x-[100vw] opacity-0",
        ].join(" ")}
      ></div>
    </section>
  );
};

export default InfoBar;
