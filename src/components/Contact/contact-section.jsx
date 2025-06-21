import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import emailjs from "@emailjs/browser";
import { ToastAction } from "../ui/toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, FacebookIcon, LinkedinIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const ENQUIRY_TYPES = [
  "Assistance in daily living",
  "Social and community participation",
  "Support Coordination",
  "Staffing",
  "Cleaning / Gardening",
  "Respite",
  "Short Term Accommodation (STA)",
  "Others"
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters" }),
  enquiryType: z.enum(ENQUIRY_TYPES, { required_error: "Please select an enquiry type",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\d{10}$/, { message: "Phone number must be 10 digits" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
  };

  // Form definition using react-hook-form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      enquiryType: undefined,
    },
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        { ...data, 
          recipient: "enquiries@tunzacareservices.com.au",
          subject: `New Enquiry: ${data.enquiryType}`
        },
        import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID
      );

      toast({
        title: "Message Sent",
        description: "Success! Check your mail box.",
        duration: 5000,
        className: "top-0 right-0 flex before:absolute z-10 before:inset-0 bg-[rgba(0,21,48,0.51)] backdrop-blur-[3.5px] border-none outline outline-1 outline-tertiary/80",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-64 bg-primary/5 -skew-y-6 transform -translate-y-32 rounded-bl-[100px] z-0" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-primary/5 -skew-y-6 transform translate-y-32 rounded-tr-[100px] z-0" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8 md:p-10">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Stay in Touch</span> With Us
            </h2>
            <p className="text-gray-600">
              Talk to us anytime, we are quick to respond and have full capacity
              to intake clients and answer all enquiries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="md:col-span-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                      control={form.control}
                      name="enquiryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enquiry Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select the purpose of your enquiry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {ENQUIRY_TYPES.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message/Inquiry</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Type your message here" 
                            className="min-h-[150px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto rounded-full text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Now"}
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Contact Information Section - keeping the existing motion effects */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-6 lg:p-8"
            >
              <div className="space-y-6">
                {/* Phone Contact */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-amber-50 rounded-xl p-4 flex items-start hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-amber-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <a 
                      href="tel:0469842289" 
                      className="font-medium hover:text-primary transition-colors"
                    >
                      0469 842 289
                    </a>
                  </div>
                </motion.div>

                {/* Email Contact */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-green-50 rounded-xl p-4 flex items-start hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0"> {/* Added min-w-0 to handle text overflow */}
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a 
                      href="mailto:admin@tunzacaresevices.com.au"
                      className="font-medium hover:text-primary transition-colors break-words"
                    >
                      admin@tunzacaresevices.com.au
                    </a>
                  </div>
                </motion.div>

                {/* Address Contact */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-blue-50 rounded-xl p-4 flex items-start hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-blue-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Address</p>
                    <div className="space-y-2">
                      <address className="font-medium not-italic">
                        4/8 Gregory terrace<br />
                        Alice springs
                      </address>
                      <address className="font-medium not-italic">
                        6/15 Pattie Street<br />
                        Cannington WA 6107
                      </address>
                    </div>
                  </div>
                </motion.div>

                {/* Social Links */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="font-medium mb-4 text-gray-700">Connect with us:</p>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;