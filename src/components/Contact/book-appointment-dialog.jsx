import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactForm from "./book-appointment-form";
import BookAppointmentForm from "./book-appointment-form";

export const BookAppointmentDialog = ({
  buttonText = "Book Appointment Now ",
  buttonVariant = "inline",
  position = null,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant}>
          {buttonText}
          {<ArrowRight className="h-4 w-4" />}
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] max-h-[90vh] custom-scrollbar rounded-lg overflow-hidden"
        style={{
          overflowY: "auto",
          borderRadius: "0.5rem",
        }}
      >
        <DialogHeader className="stickyy top-0 bg-transparent z-10 pb-4 pt-2 pr-4">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold text-[#1a6b9f]">
              Book Your Appointment Now
            </DialogTitle>
          </div>
          <DialogDescription>
            Fill out the form below to book Appintment with the Tunza Care Services.
          </DialogDescription>
        </DialogHeader>

        <BookAppointmentForm />
      </DialogContent>
    </Dialog>
  );
};
