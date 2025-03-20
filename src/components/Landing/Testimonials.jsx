"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Typography from "../shared/Typography";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "James Ryan",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    rating: 5,
    date: "Jan 15, 2024",
  },
  {
    id: 2,
    name: "James Ryan",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    rating: 5,
    date: "Jan 15, 2024",
  },
  {
    id: 3,
    name: "James Ryan",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    rating: 5,
    date: "Jan 15, 2024",
  },
  {
    id: 4,
    name: "James Ryan",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    rating: 5,
    date: "Jan 15, 2024",
  },
  {
    id: 5,
    name: "James Ryan",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    rating: 5,
    date: "Jan 15, 2024",
  },
  {
    id: 6,
    name: "James Ryan",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    rating: 5,
    date: "Jan 15, 2024",
  },
  {
    id: 7,
    name: "James Ryan",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    rating: 5,
    date: "Jan 15, 2024",
  },
  {
    id: 8,
    name: "James Ryan",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    rating: 5,
    date: "Jan 15, 2024",
  },
  {
    id: 9,
    name: "James Ryan",
    avatar: "https://randomuser.me/api/portraits/women/81.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    rating: 5,
    date: "Jan 15, 2024",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className='p-6 flex flex-col h-full'>
      <div className='flex items-center gap-3 mb-3'>
        <img
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          className='w-12 h-12 rounded-full object-cover'
        />
        <div>
          <h3 className='font-medium'>{testimonial.name}</h3>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-4 h-4",
                  i < testimonial.rating
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
      <p className='text-muted-foreground flex-grow'>{testimonial.content}</p>
      <div className='text-right text-sm text-muted-foreground mt-4'>
        {testimonial.date}
      </div>
    </Card>
  );
};

export const TestimonialsSection = ({ className }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 6;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section className={cn("relative py-16 px-4 overflow-hidden", className)}>
      {/* Background decoration */}
      <div className='absolute -right-20 top-0 w-96 h-96 rounded-full border-[40px] border-sky-50/50 -z-10'></div>

      <div className='max-w-6xl mx-auto'>
        {/* Section header */}
        <div className='text-center mb-12'>
          <>
            <Typography variant='subtitle'>Testimonials</Typography>
            <Typography
              variant='h1'
              className={"py-4"}
              h1Parts={[
                { text: "welcome", color: "color1" },
                { text: "communities", color: "color2" },
              ]}
            />
          </>
        </div>

        {/* Testimonials grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {currentTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Navigation */}
        <div className='flex justify-center gap-2'>
          <Button
            variant='outline'
            size='icon'
            className='rounded-full bg-gray-100 hover:bg-gray-200 border-none'
            onClick={handlePrevious}
          >
            <ChevronLeft className='h-4 w-4' />
            <span className='sr-only'>Previous page</span>
          </Button>
          <Button
            variant='default'
            size='icon'
            className='rounded-full bg-primary hover:bg-primary/90'
            onClick={handleNext}
          >
            <ChevronRight className='h-4 w-4' />
            <span className='sr-only'>Next page</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
