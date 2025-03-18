import { logo } from "@/assets";
import React from "react";
import { navigation, socials } from "../../constants";
import { MdOutlineCall } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white rounded-t-sm">
      <div className="container flex justify-between flex-wrap mx-auto px-12 md:px-16  gap-6 pb-4">
        <div className="space-y-4">
          <img src={logo} alt="Tunza Care Services Logo" className="w-40 mx-8 " />
          <div className="flex space-x-4 bg-slate-200 p-3 px-5   rounded-md ">
            {socials.map(({ link, ariaLabel, iconImage: Icon }, index) => (
              <a
                href={link}
                key={index}
                className="text-slate-600 hover:text-gray-950 rounded-full border border-black p-1.5"
              >
                <span class="sr-only">{ariaLabel}</span>

                <Icon size={`22`} />
                <span className=" w-4 h-4 outline outline-lime-600"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Sections */}

        <div>
          <h4 className="font-semibold text-2xl text-[#64cdf6]/60 mb-4">
            Quick Links
          </h4>
          <div>
            <div className="flex flex-col space-y-2 text-center">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="text-gray-600  text-lg hover:text-gray-800 cursor-pointer"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-semibold text-2xl  text-[#64cdf6]/60 mb-4">
            Contact
          </h4>
          <ul className="space-y-4 text-center ">
            <li className="flex items-center space-x-3 text-gray-600">
              <span className=" bg-[#64cdf6]/60 text-white p-2 rounded-full">
                <MdOutlineCall size={'22'}/>
              </span>
              <a href="">
                <span className="text-lg">08 9387 6326</span>
              </a>
            </li>
            <li className="flex items-center space-x-3 text-gray-600">
              <span className=" bg-[#64cdf6]/60 text-white p-2 rounded-full">
                <MdMailOutline size={'22'}/>
              </span>
              <span className="text-lg">loremipsum@email.com</span>
            </li>
            <li className="flex items-center text-start space-x-3 text-gray-600">
              <span className=" bg-[#64cdf6]/60 text-white p-2 rounded-full">
                <MdOutlineLocationOn size={'22'}/>
              </span>
              <span className="text-lg">
                6/15 Pattie St
                <br />
                Cannington WA 6107
              </span>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      {/* Privacy Policy Section */}
      <div className=" flex justify-between mx-36 p-4 text-center ">
        <p className="text-gray-500 text-sm">
          © Copyright 2025. All Rights Reserved
        </p>

        <div>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
            Privacy Policy
          </a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
