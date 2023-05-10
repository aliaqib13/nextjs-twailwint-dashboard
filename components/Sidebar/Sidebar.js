import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import CustomLink from "../Link/Link";

import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const [showSubMenu, setshowSubMenu] = useState("");
  const router = useRouter();

  const Menu = [
    {
      name: "DASHBOARD",
      path: "/admin/dashboard",
      icon: <AiOutlineHome className=" text-xl" />,
      subMenu: [
        { name: "Product", path: "/product" },
        { name: "Product", path: "/product" },
        { name: "Product", path: "/product" },
      ],
    },
    {
      name: "MY ACCOUNT",
      path: "/admin/settings",
      icon: <RxAvatar className=" text-xl" />,
    },
    {
      name: "SETTINGS",
      path: "/admin/settings",
      icon: <AiOutlineSetting className=" text-xl" />,
    },
    {
      name: "ALL USER",
      path: "/admin/tables",
      icon: <FiUsers className=" text-xl" />,
    },
    {
      name: "CATEGORIES",
      path: "/admin/tables",
      icon: <BiCategoryAlt className=" text-xl" />,
    },
    {
      name: "PRODUCTS",
      path: "/admin/tables",
      icon: <MdOutlineProductionQuantityLimits className=" text-xl" />,
    },
  ];
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <img
              className=" "
              src="https://sireprinting.com/img/brand/Sire-Printing.png"
              alt="logo"
            />
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      Notus NextJS
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className=" px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>

            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {Menu?.map((item, i) => (
                <>
                  <li
                    key={i}
                    className="items-center"
                    onClick={() => setshowSubMenu(item?.name)}
                  >
                    <div
                      className={`text-xs uppercase font-bold block cursor-pointer
                        ${
                          item?.path === router.pathname
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500"
                        }`}
                    >
                      <div className="flex items-center justify-between ">
                        <div className="flex items-center">
                          <div className="mr-4"> {item?.icon}</div>
                          <div> {item?.name}</div>
                        </div>
                        <div className=" m-4 text-xl ">
                          <MdOutlineKeyboardArrowDown />
                        </div>
                      </div>
                    </div>
                  </li>

                  {item?.subMenu && showSubMenu === item?.name && (
                    <>
                      {item?.subMenu?.map((sub, i) => (
                        <li key={i} className=" grid grid-cols-1 gap-2">
                          <div className=" pl-10">
                            <CustomLink
                              href={sub.path}
                              className=" text-lg py-2 bg-black"
                            >
                              {sub.name}
                            </CustomLink>
                          </div>
                        </li>
                      ))}
                    </>
                  )}
                </>
              ))}
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              LogOut
            </h6>
          </div>
        </div>
      </nav>
    </>
  );
}
