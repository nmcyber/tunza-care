import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import { handleObfuscatedClick, obfuscateValue } from "@/utils/obfuscation"

const CONTACT_INFO = {
  phone: "0893876326",
  email: "admin@tunzacare.com.au",
  address: {
    street: "6/15 Pattie Street",
    city: "Cannington WA 6107"
  }
}

export const ContactInfo = ({ itemVariants }) => {
  const obfuscatedPhone = obfuscateValue(CONTACT_INFO.phone)
  const obfuscatedEmail = obfuscateValue(CONTACT_INFO.email)

  return (
    <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
      <h4 className="font-semibold text-lg sm:text-xl text-primary">Contact Us</h4>
      <ul className="space-y-4">
        <ContactItem
          icon={Phone}
          type="tel"
          value={obfuscatedPhone}
          display="0469 842 289"
        />
        <ContactItem
          icon={Mail}
          type="mailto"
          value={obfuscatedEmail}
          display="enquiries@tunzacareservices.com.au"
        />
        <AddressItem address={CONTACT_INFO.address} />
      </ul>
    </motion.div>
  )
}

const ContactItem = ({ icon: Icon, type, value, display }) => (
  <li className="flex items-start space-x-3">
    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
      <Icon size={16} className="sm:size-[18px]" />
    </div>
    <a
      href="#"
      data-type={type}
      data-value={value}
      onClick={handleObfuscatedClick}
      className="text-sm sm:text-base text-gray-600 hover:text-primary transition-colors duration-200 break-words"
    >
      {display}
    </a>
  </li>
)

const AddressItem = ({ address }) => (
  <li className="flex space-x-3">
    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
      <MapPin size={16} className="sm:size-[18px]" />
    </div>
    <address className="text-sm sm:text-base text-gray-600 not-italic">
      {address.street}<br />
      {address.city}
    </address>
  </li>
)