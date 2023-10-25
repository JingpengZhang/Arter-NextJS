"use client";
import React from "react";
import Image from "next/image";
import Avatar from "../../assets/images/face-1.jpg";
import { Icon } from "@iconify/react";
import Link from "next/link";

const infoStyle =
  "w-full flex items-center justify-between mt-3 first-of-type:mt-0";

const spliteBarStyle = " w-full h-px bg-[#d5d5d7] my-5";

const InfoBar: React.FC = () => {
  return (
    <div className="h-full w-72 bg-[#f4f4f6] shadow-lg">
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
          <Link href={""} className="hover:text-[#1e1e28] transition-all">
            <Icon icon="mdi:github" width="18" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
