import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Anchor, Loader2, ExternalLink, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

export const ApplicationFormDialog = ({
  buttonText = "Apply Today",
  buttonVariant = "inline",
  position = null,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: position || "",
    experience: "",
    coverLetter: "",
    resume: null,
    agreeToTerms: false,
  });
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFormData((prev) => ({ ...prev, resume: e.dataTransfer.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      toast({
        title: "Please agree to the terms",
        description:
          "You must agree to the terms and conditions to submit your application.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your server here
      //  hr@tunzacareservies.com.au
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Application submitted!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });

      // Reset form and close dialog
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: position || "",
        experience: "",
        coverLetter: "",
        resume: null,
        agreeToTerms: false,
      });
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description:
          "Your application couldn't be submitted. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant}>{buttonText}{<ArrowRight className="h-4 w-4" />}</Button>
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
              Join Our Team
            </DialogTitle>
            <Link
              to={`/careers/apply?position=${encodeURIComponent(
                position || ""
              )}`}
              className="flex items-center text-sm bg-transparent text-[#1a6b9f] hover:underline"
              onClick={() => setIsOpen(false)}
            >
              <ExternalLink className="h-3.5 w-3.5 mr-1" />
              Open in full page
            </Link>
          </div>
          <DialogDescription>
            Fill out the form below to apply for a position at Tunza Care
            Services.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">
              Position <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.position}
              onValueChange={(value) => handleSelectChange("position", value)}
              required
            >
              <SelectTrigger id="position">
                <SelectValue placeholder="Select a position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="support-worker">Support Worker</SelectItem>
                <SelectItem value="registered-nurse">
                  Registered Nurse
                </SelectItem>
                <SelectItem value="registered-nurse">
                  Enrolled Nurse
                </SelectItem>
                <SelectItem value="assistant-nurse">
                  Assistant in Nursing
                </SelectItem>
                <SelectItem value="catering-assistant">
                  Cleaning & Gardening
                </SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">
              Years of Experience <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.experience}
              onValueChange={(value) => handleSelectChange("experience", value)}
              required
            >
              <SelectTrigger id="experience">
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1">Less than 1 year</SelectItem>
                <SelectItem value="1-3">1-3 years</SelectItem>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="5-10">5-10 years</SelectItem>
                <SelectItem value="10+">10+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverLetter">Cover Letter</Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us why you're interested in this position and what makes you a great fit"
              className="min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <Label>
              Resume/CV <span className="text-red-500">*</span>
            </Label>
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                isDragging
                  ? "border-[#1a6b9f] bg-[#1a6b9f]/5"
                  : "border-gray-300 hover:border-[#1a6b9f]/50"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("resume-upload").click()}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#1a6b9f]/10 flex items-center justify-center text-[#1a6b9f] mb-3">
                  <Anchor className="h-5 w-5" />
                </div>
                {formData.resume ? (
                  <p className="text-gray-700 mb-1">
                    File selected:{" "}
                    <span className="font-medium">{formData.resume.name}</span>
                  </p>
                ) : (
                  <>
                    <p className="text-gray-700 mb-1">
                      Drop your resume here or{" "}
                      <span className="text-[#1a6b9f] underline">Upload</span>
                    </p>
                    <p className="text-gray-500 text-sm">
                      PDF, DOC, or DOCX (Max. 5MB)
                    </p>
                  </>
                )}
                <input
                  id="resume-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required={!formData.resume}
                />
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
              }
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="agreeToTerms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the terms and conditions{" "}
                <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-muted-foreground">
                By submitting this application, I consent to Tunza Care Services
                processing my personal data for recruitment purposes.
              </p>
            </div>
          </div>

          <DialogFooter className="sticky bottom-0 pt-4 pb-2 bg-background z-10">
            <DialogClose asChild>
              <Button type="button" variant="outline" disabled={isSubmitting}>
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-[#1a6b9f] hover:bg-[#155a87] text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
