import { FaXTwitter } from "react-icons/fa6";
import { MapPin, Clock, Phone } from "lucide-react"
import { callIcon, image10, image11, image9, image_10, image_11, image_4, image_5, image_6, image_7, image_8, image_9, mapPin, messageIcon } from "@/assets";
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
    title: "Locations",
    url: "/locations",
  },
  {
    id: "5",
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
  { id: 12, src: image_6 },
  { id: 8, src: image9 },
  { id: 4, src: image6 },
  { id: 5, src: image_4 },
  { id: 3, src: image2 },
  { id: 2, src: image1 },
  { id: 16, src: image_10 },
  { id: 7, src: image_11 },
];
export const images2 = [
  { id: 9, src: image10 },
  { id: 15, src: image_9 },
  { id: 14, src: image11 },
  { id: 17, src: image_8 },
  { id: 6, src: image8 },
  // { id: 10, src: `https://picsum.photos/id/${Math.floor(Math.random() * 800) + 1}/1024/480` },
  { id: 13, src: image_7 },
  { id: 11, src: image_5 },
  { id: 20, src: image4 },
  { id: 19, src: image3 },
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
    value: "enquiries@tunzacareservices.com.au",
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

export const CONTACT_INFO = {
  officeHours: {
    icon: Clock,
    title: "Office Hours",
    details: [
      "Monday - Friday: 8:30 AM - 5:00 PM",
      "Saturday: 9:00 AM - 1:00 PM",
      "Sunday: Closed"
    ]
  },
  supportHours: {
    icon: Phone,
    title: "Support Hours",
    details: [
      "24/7 Support Available",
      "Support Line: 0469 842 289",
      "For non-urgent matters, please use the contact form."
    ]
  },
  emergency: {
    icon: Phone,
    title: "Emergency Line",
    details: [
      "24/7",
      "Call: 0469 842 289",
      "Life threatening, call: 000"
    ]
  },
  serviceAreas: {
    icon: MapPin,
    title: "Service Areas",
    details: [
      "Perth Metropolitan Area",
      "Cunderdin",
      "Kojonup",
      "And surrounding areas"
    ]
  }
};

export const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13799.40866685036!2d115.9214863!3d-32.0651359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bcd0f3e1f9d1%3A0x504f0b535df4880!2sCanning%20Vale%20WA%206155%2C%20Australia!5e0!3m2!1sen!2sus!4v1648226723553!5m2!1sen!2sus";