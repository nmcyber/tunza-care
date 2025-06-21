import React from "react";
import MapComponent from "../shared/MapComponent";
import Typography from "../shared/Typography";
import { contactData } from "@/constants";
import { handleObfuscatedClick, obfuscateValue } from "@/utils/obfuscation";
import { Link } from "react-router-dom";

const Location = () => {
  const ContactItem = ({ iconSrc, altText, title, value, linkType }) => {
    const obfuscatedValue = obfuscateValue(value);
  
    return (
      <li className="flex items-center space-x-4 bg-white shadow-md p-4 rounded-md">
        <span
          className={`bg-[#${
            title === "Address"
              ? "13668E33"
              : title === "Email"
              ? "30B99633"
              : title === "Phone"
              ? "FF990033"
              : "eee"
          }] p-3 rounded-md`}
        >
          <img src={iconSrc} alt={altText} size={32} className="" />
        </span>
        <div>
          <h4 className="text-sm text-gray-500">{title}</h4>
          <p className="text-gray-700 font-medium">
            {title === "Address" ? (
              value.split("<br />").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < value.split("<br />").length - 1 && <br />}
                </React.Fragment>
              ))
            ) : linkType ? (
              <a
                href="#"
                data-type={linkType}
                data-value={obfuscatedValue}
                onClick={handleObfuscatedClick}
                className="hover:underline"
              >
                {value}
              </a>
            ) : (
              value
            )}
          </p>
        </div>
      </li>
    );
  };  

  return (
    <section className="bg-gray-100 py-5">
      <div className="max-w-[90svw] mx-auto md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center ">
        {/* Contact Info Section */}
        <div className=" grid space-y-8">
          <div className=" grid place-items-start space-y-4 ">
            <Typography variant="h1" className=" mb-4" h1Parts={[ { text: 'Say', color: 'color1' }, { text: 'Hello..!', color: 'color2' } ]} />
          </div>
          <ul className="space-y-6 md:pr-8 ">
            {contactData.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </ul>
          <Link to="/contact" className="mt-6 px-6 py-3 w-48 bg-primary text-white rounded-md outline outline-transparent shadow-xl hover:outline-white hover:shadow-2xl hover:bg-primary/95">
            Contact Form
          </Link>
        </div>

        {/* Google Map Section */}
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <MapComponent />
        </div>
      </div>
    </section>
  );
};

export default Location;