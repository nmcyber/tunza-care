import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Twitter, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { handleObfuscatedClick, obfuscateValue } from "@/utils/obfuscation"

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Define the form validation schema with Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  company: z.string().optional(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactSection = () => {
  // Obfuscate contact information
  const phoneNumber = "0469842289";
  const emailAddress = "info@tunzacare.com.au";
  const obfuscatedPhone = obfuscateValue(phoneNumber);
  const obfuscatedEmail = obfuscateValue(emailAddress);

  // Initialize the form with react-hook-form and zod validation
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Handle form submission
  function onSubmit(values) {
    // Handle form submission logic here
    console.log(values);

    // Show success toast
    toast({
      title: "Form submitted!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    form.reset();
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute top-0 right-0 w-full h-64 bg-primary/5 -skew-y-6 transform -translate-y-32 rounded-bl-[100px] z-0'></div>
      <div className='absolute bottom-0 left-0 w-full h-64 bg-primary/5 -skew-y-6 transform translate-y-32 rounded-tr-[100px] z-0'></div>

      <motion.div
        className='max-w-6xl mx-auto relative z-10'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='bg-white rounded-2xl shadow-sm overflow-hidden p-8 md:p-10'>
          <motion.div
            variants={itemVariants}
            className='max-w-3xl mx-auto mb-10'
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              <span className='text-primary'>Stay Touch</span> With Us
            </h2>
            <p className='text-gray-600'>
              Talk to us anytime, we are quick to respond and have full capacity
              to intake clients and answer all enquiries.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            <motion.div variants={itemVariants} className='md:col-span-2'>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-6'
                >
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <FormField
                      control={form.control}
                      name='name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder='Enter your name' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='company'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='Enter company here'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type='email'
                              placeholder='Email address here'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='phone'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone No</FormLabel>
                          <FormControl>
                            <Input placeholder='Enter phone here' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message/Inquiry</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder='Type your message here'
                            className='min-h-[150px]'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type='submit'
                    className='bg-primary hover:bg-[#155a87] text-white px-8 py-6 h-auto rounded-full text-base'
                  >
                    Submit Now
                  </Button>
                </form>
              </Form>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='bg-gray-50 rounded-xl p-6'
            >
              <div className='space-y-6'>
                <div className='bg-amber-50 rounded-xl p-4 flex items-start'>
                  <div className='flex-shrink-0 mr-4'>
                    <div className='w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center'>
                      <Phone className='h-5 w-5 text-amber-500' />
                    </div>
                  </div>
                  <div>
                    <p className='text-sm text-gray-500 mb-1'>Phone</p>
                    <a
                      href='#'
                      data-type='tel'
                      data-value={obfuscatedPhone}
                      onClick={handleObfuscatedClick}
                      className='font-medium hover:text-primary transition-colors duration-200'
                    >
                      0469 842 289
                    </a>
                  </div>
                </div>

                <div className='bg-green-50 rounded-xl p-4 flex items-start'>
                  <div className='flex-shrink-0 mr-4'>
                    <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
                      <Mail className='h-5 w-5 text-green-500' />
                    </div>
                  </div>
                  <div>
                    <p className='text-sm text-gray-500 mb-1'>Email</p>
                    <a
                      href='#'
                      data-type='mailto'
                      data-value={obfuscatedEmail}
                      onClick={handleObfuscatedClick}
                      className='font-medium hover:text-primary transition-colors duration-200'
                    >
                      info@tunzacare.com.au
                    </a>
                  </div>
                </div>

                <div className='bg-blue-50 rounded-xl p-4 flex items-start'>
                  <div className='flex-shrink-0 mr-4'>
                    <div className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center'>
                      <MapPin className='h-5 w-5 text-blue-500' />
                    </div>
                  </div>
                  <div>
                    <p className='text-sm text-gray-500 mb-1'>Address</p>
                    <p className='font-medium'>
                      4 Dorchester Turn
                      <br />
                      Canning Vale 6155
                    </p>
                  </div>
                </div>

                <div className='pt-6'>
                  <p className='font-medium mb-4'>Connect with us:</p>
                  <div className='flex space-x-3'>
                    <a
                      href='#'
                      className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors'
                    >
                      <Twitter className='h-5 w-5' />
                    </a>
                    <a
                      href='#'
                      className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors'
                    >
                      <Youtube className='h-5 w-5' />
                    </a>
                    <a
                      href='#'
                      className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors'
                    >
                      <FaTiktok className='h-4 w-4' />
                    </a>
                    <a
                      href='#'
                      className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='h-5 w-5'
                      >
                        <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
                      </svg>
                    </a>
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
