import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { callIcon, mapPin, messageIcon } from "@/assets";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { image1, image2, image3, image4, image6, image7, image8 } from "@/assets";

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
    url: "/employment",
  },
  {
    id: "4",
    title: "Contact",
    url: "/contact",
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
  {
    id: 1,
    type: "text",
    titleParts: [
      { text: "Moments of ", color: "color1" },
      { text: "Connection", color: "#13668E" },
    ],
    subtitle: "Quality Care",
  },
  { id: 2, src: image1 },
  { id: 3, src: image2 },
  { id: 4, src: image6 },
  { id: 8, src: `https://picsum.photos/id/${Math.floor(Math.random() * 300) + 1}/1024/480` },
  { id: 9, src: `https://picsum.photos/id/${Math.floor(Math.random() * 400) + 1}/1024/480` },
  { id: 14, src: `https://picsum.photos/id/${Math.floor(Math.random() * 700) + 1}/1024/480` },
  { id: 15, src: `https://picsum.photos/id/${Math.floor(Math.random() * 600) + 1}/1024/480` },
  { id: 16, src: `https://picsum.photos/id/${Math.floor(Math.random() * 200) + 1}/1024/480` },
  { id: 17, src: `https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/1024/480` },
  { id: 18, src: "https://picsum.photos/id/40/1920/1080" },
];
export const images2 = [
  { id: 20, src: image4 },
  { id: 19, src: image3 },
  { id: 5, src: `https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/1024/480` },
  { id: 6, src: image8 },
  { id: 7, src: `https://picsum.photos/id/${Math.floor(Math.random() * 500) + 1}/1024/480` },
  { id: 10, src: `https://picsum.photos/id/${Math.floor(Math.random() * 800) + 1}/1024/480` },
  { id: 11, src: `https://picsum.photos/id/${Math.floor(Math.random() * 900) + 1}/1024/480` },
  { id: 12, src: `https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 1}/1024/480` },
  { id: 13, src: image7 },
];

export const contactData = [
  {
    title: "Address",
    iconSrc: mapPin,
    altText: "Location Pin",
    value: `6/15 Pattie St<br />Cannington WA 6107`,
  },
  {
    title: "Email",
    iconSrc: messageIcon,
    altText: "Mail icon",
    value: "admin@tunzacaresevices.com.au",
    linkType: "mailto",
  },
  {
    title: "Phone",
    iconSrc: callIcon,
    altText: "Phone icon",
    value: "08 9387 6326",
    linkType: "tel",
  },
];

export const services = [ 
    "Personal care and daily living",
    "Transport options",
    "24/7 support" ,
    "Social and community participation" ,
    "Finding and keeping a job",
    "Individual living options (ILO)",
    "Supporting independent living (SIL)",
    "Level 2 Support Coordination",
    "Respite",
    "Staffing agent"  
];


