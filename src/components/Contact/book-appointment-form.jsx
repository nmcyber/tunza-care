import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/constants";

const BookAppointmentForm = () => {
  const [errors, setErrors] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);
  //   const [isDragging, setIsDragging] = useState(false);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    files: null,
  });

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, recipient: formData.email }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.FirstName) newErrors.FirstName = "First name is required.";
    if (!formData.LastName) newErrors.LastName = "Last name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.service) newErrors.service = "Please select an service.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmiting(true);
      console.log("Sending message...", formData);
      emailjs
        // need to update the credetials of emailjs with the tunza email
        .send(
          import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
          { ...formData, recipient: formData.email },
          import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID
        )
        .then(
          (response) => {
            toast({
              title: "Message Sent",
              description: "Success! Check your mail box.",
              duration: 5000,
              // action: <ToastAction altText="Thank you!">Close</ToastAction>,
              className:
                " top-0 right-0 flex before:absolute z-10 before:inset-0 bg-[rgba(0,21,48,0.51)] backdrop-blur-[3.5px] border-none outline outline-1 outline-tertiary/80 ",
            });
            setFormData({
              FirstName: "",
              lastName: "",
              email: "",
              phone: "",
              service: "",
              message: "",
              to_email: formData.email,
              recipient: formData.email,
              confirmation_link:
                "https://nmcyber.com.au/confirm?email=" +
                encodeURIComponent(formData.email),
            });
          },
          (error) => {
            // console.error("FAILED...", error);
            toast({
              title: "Error",
              description: "Failed to send message. Please try again.",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
              variant: "destructive",
              duration: 5000,
            });
          }
        )
        .finally(() => {
          setIsSubmiting(false);
        });
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={itemVariants}
      className="md:col-span-2 border border-black rounded-md p-4"
    >
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="FirstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name
            </label>
            <Input
              id="FirstName"
              name="FirstName"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your First name"
              className="w-full"
              required
            />
            {errors.FirstName && (
              <p className="text-tertiary text-xs mt-1">{errors.FirstName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="LastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name
            </label>
            <Input
              id="LastName"
              name="LastName"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Last name"
              className="w-full"
              required
            />
            {errors.LastName && (
              <p className="text-tertiary text-xs mt-1">{errors.LastName}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address here"
              className="w-full"
              required
            />
            {errors.email && (
              <p className="text-tertiary text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone No
            </label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone here"
              className="w-full"
            />
            {errors.phone && (
              <p className="text-tertiary text-xs mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
        <div className="mb-6 space-y-4">
          <Label htmlFor="Service">
            Service Required <span className="text-red-500">*</span>
          </Label>
          <Select
            value={formData.service}
            onValueChange={(value) => handleSelectChange("service", value)}
            required
          >
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem value={service}>{service}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.industry && (
            <p className="text-tertiary text-xs mt-1">{errors.industry}</p>
          )}
        </div>
        <div className="mb-6 space-y-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here"
            className="w-full min-h-[150px]"
            required
          />
          {errors.message && (
            <p className="text-tertiary text-xs mt-1">{errors.message}</p>
          )}
        </div>
        <Button
          type="submit"
          className="bg-primary hover:bg-primary text-white px-8 py-6 h-auto rounded-full text-base"
          disabled={isSubmiting}
        >
          {isSubmiting ? "Submiting..." : "Submit Now"}
        </Button>
      </form>
    </motion.div>
  );
};

export default BookAppointmentForm;
