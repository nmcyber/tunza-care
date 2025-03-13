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
        link: '',
        ariaLabel: 'Facebook'
    },
    {
        iconImage: FaInstagram,
        link: '',
        ariaLabel: 'Instagram'
    },
    {
        iconImage: FaLinkedinIn,
        link: '',
        ariaLabel: 'LinkedIn'
    },
    {
        iconImage: FaXTwitter,
        link: '',
        ariaLabel: 'X'
    }
]