"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import useOutsideClick from "../../hooks/useOutsideClick";

interface MenuItem {
  id: number;
  name: string;
  path: string;
  children: MenuItem[];
}

const funBtnStyle =
  "w-10 mt-4 first-of-type:mt-0 last-of-type:mb-5 lg:last-of-type:mb-0 aspect-square flex items-center justify-center duration-700 transition-all hover:text-[#1c1c23] bg-white lg:bg-transparent rounded-full shadow-lg lg:shadow-none";

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  const [menus, setMenus] = useState<MenuItem[]>([
    {
      id: 1,
      name: "首页",
      path: "/",
      children: [],
    },
    {
      id: 2,
      name: "项目",
      path: "/projects",
      children: [],
    },
    {
      id: 3,
      name: "博客",
      path: "/blog",
      children: [
        {
          id: 3,
          name: "JavaScript",
          path: "/blog?category=javascript",
          children: [],
        },
        {
          id: 4,
          name: "VueJS",
          path: "/blog?category=vue-js",
          children: [],
        },
        {
          id: 5,
          name: "ReactJS",
          path: "/blog?category=react-js",
          children: [],
        },
      ],
    },
    {
      id: 6,
      name: "关于",
      path: "/about",
      children: [],
    },
  ]);

  const [activeMenuItemId, setActiveMenuItemId] = useState(0);

  // 处理菜单点击
  const handleClickMenuItem = (menuItem: MenuItem) => {
    // 当点击的菜单项有子菜单时,展开子菜单,否则跳转
    if (menuItem.children.length === 0) {
    } else {
      setActiveMenuItemId((prev) => {
        return prev === menuItem.id ? 0 : menuItem.id;
      });
    }
  };

  const packUpMenu = () => {
    setOpen(false);
  };

  const navRef = useOutsideClick(packUpMenu);

  return (
    <section
      className={[
        "w-0 duration-700 transition-all",
        open ? "lg:w-56" : "lg:w-20",
      ].join(" ")}
    >
      <div
        ref={navRef}
        className={[
          "translate-x-full lg:translate-x-0 h-full bg-[#f4f4f6] shadow-lg text-[#5c5c6d] duration-700 transition-all flex flex-col justify-between",
          open ? "w-56 -translate-x-56" : "w-20",
        ].join(" ")}
      >
        <div className="w-full">
          <div className="flex items-center justify-start bg-white shadow-lg w-full h-16">
            <Icon
              onClick={() =>
                setOpen((prev) => {
                  return !prev;
                })
              }
              className={[
                "z-10 ml-8 duration-700 transition-all cursor-pointer hover:text-[#1c1c23]",
                open ? " translate-x-0" : " -translate-x-40 lg:translate-x-0",
              ].join(" ")}
              icon={open ? "mingcute:close-line" : "mingcute:menu-line"}
              width={18}
            />
          </div>
          <div className="w-full flex items-center justify-center h-32 text-sm">
            <span
              className=" rotate-90 duration-700 transition-all"
              style={{
                opacity: open ? 0 : 1,
                transform: open
                  ? "translateX(20px) rotate(90deg)"
                  : "translateX(0px) rotate(90deg)",
              }}
            >
              首页
            </span>
          </div>
        </div>
        {/** 菜单 */}
        <div
          className="w-full text-sm relative duration-700 transition-all"
          style={{
            transform: open
              ? "translateX(0%) translateY(-9rem)"
              : "translateX(100%) translateY(-9rem)",
            opacity: open ? 1 : 0,
          }}
        >
          <ul>
            {menus.map((item) => {
              return (
                <li key={item.id} className="">
                  <div
                    onClick={() => handleClickMenuItem(item)}
                    className="flex items-center justify-between px-8 h-11 duration-700 transition-all cursor-pointer group hover:text-[#1c1c23]"
                  >
                    <span>{item.name}</span>
                    {item.children.length !== 0 && (
                      <Icon
                        icon="iconamoon:arrow-right-2"
                        className="duration-700 transition-all group-hover:rotate-90 "
                        width={18}
                      />
                    )}
                  </div>
                  <ul
                    className="w-full shadow-inner bg-[#e4e5e7] px-8 duration-700 transition-all overflow-hidden flex flex-col justify-center items-start"
                    style={{
                      height:
                        item.id === activeMenuItemId
                          ? item.children.length * 2.25 + 1.5 + "rem"
                          : 0,
                      opacity: item.id === activeMenuItemId ? 1 : 0,
                    }}
                  >
                    {item.children.map((subItem) => {
                      return (
                        <li key={subItem.id}>
                          <Link
                            href={""}
                            className="h-9 flex items-center duration-700 transition-all hover:text-[#1c1c23]"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full relative">
          <div
            className="w-full flex flex-col items-center pb-5 -translate-x-40 lg:translate-x-0 duration-700 transition-all"
            style={{
              opacity: open ? 0 : 1,
            }}
          >
            <button className={funBtnStyle}>
              <Icon icon="eva:sun-fill" width={20} />
            </button>
            <button className={funBtnStyle}>
              <Icon icon="tabler:arrow-bar-to-up" width={20} />
            </button>
          </div>
        </div>
      </div>
      {/** 遮罩 */}
      <div
        className={[
          " absolute duration-700 transition-opacity top-16 lg:top-0 right-56 w-[calc(100%-14rem)] lg:w-[calc(100%-14rem-18rem)] h-[calc(100%-4rem)] lg:h-full bg-[rgba(0,0,0,0.4)]",
          open
            ? " translate-x-0 opacity-100"
            : " -translate-x-[100vw] opacity-0",
        ].join(" ")}
      ></div>
    </section>
  );
};

export default Navigation;
