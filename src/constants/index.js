import { image5, image1, image2, image3, image4 } from "@/assets";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About Us",
    url: "/about",
  },
  {
    id: "2",
    title: "Services",
    url: "/services",
  },
  {
    id: "3",
    title: "Employment",
    url: "/",
  },
  {
    id: "4",
    title: "Contact",
    url: "/",
  },
];

export const socials = [
  {
    iconImage: FaFacebookF,
    link: "",
    ariaLabel: "Facebook",
  },
  {
    iconImage: FaInstagram,
    link: "",
    ariaLabel: "Instagram",
  },
  {
    iconImage: FaLinkedinIn,
    link: "",
    ariaLabel: "LinkedIn",
  },
  {
    iconImage: FaXTwitter,
    link: "",
    ariaLabel: "X",
  },
];

export const images1 = [
  { id: 1, src: { image1 } },
  { id: 2, src: { image2 } },
  { id: 3, src: { image3 } },
  // { id: 4, src: {image3 }},
  // { id: 5, src: {image4} },
];
export const images2 = [
  { id: 1, src: { image4 } },
  { id: 2, src: { image5 } },
  // { id: 3, src: {image3} },
];
