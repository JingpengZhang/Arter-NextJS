"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import CoverImage from "@/assets/images/bg.jpg";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface BlogInfo {
  id: number;
  title: string;
  cover: StaticImageData;
  create_time: string;
  description: string;
  categories: {
    name: string;
    id: number;
  }[];
}

interface Props {
  blogData: BlogInfo;
}

const BlogCard: React.FC<Props> = ({
  blogData = {
    id: 1,
    cover: CoverImage,
    title: "Follow your own design process.",
    description:
      "My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the…",
    categories: [
      {
        id: 1,
        name: "Design",
      },
      {
        id: 2,
        name: "Events",
      },
      {
        id: 3,
        name: "Technology",
      },
    ],
    create_time: "Sep 24, 2020",
  },
}) => {
  return (
    <div className=" flex flex-col w-full h-[400px] shadow-lg">
      <div className="w-full h-48">
        <Image src={blogData.cover} alt="封面" />
      </div>
      <div className="p-7 bg-white flex-grow text-xs text-[#5c5c6f] ">
        {/** 时间,分类 */}
        <div
          style={{ boxShadow: "inset 0 3px 8px 0 rgba(15,15,20,.2)" }}
          className="flex items-center bg-[#f4f4f6] h-8 rounded-full px-4"
        >
          <span>{blogData.create_time}</span>
          <span className="mx-2">/</span>
          <ul className="flex items-center">
            {blogData.categories.map((item, index) => {
              return (
                <li key={item.id} className="">
                  <Link
                    href=""
                    className=" transition-all duration-700 hover:text-[#1e1e28]"
                  >
                    {item.name}
                  </Link>
                  {index !== blogData.categories.length - 1 && <span>,</span>}
                </li>
              );
            })}
          </ul>
        </div>
        {/** 标题 */}
        <Link href={""} className="block font-bold text-[#1e1e28] text-sm mt-4">
          {blogData.title}
        </Link>
        {/** 概述 */}
        <p className=" line-clamp-2 text-[#5c5c6f] tracking-wide mt-3 leading-5">
          {blogData.description}
        </p>
        {/** 跳转 */}
        <Link
          href={""}
          className="text-primary font-bold tracking-wider group mt-5 flex items-center"
        >
          READ MORE{" "}
          <Icon
            icon="ic:round-keyboard-arrow-right"
            className="ml-0 group-hover:ml-2 duration-700 transition-all"
            width={18}
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
