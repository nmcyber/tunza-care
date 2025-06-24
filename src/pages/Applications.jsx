import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from "react-router-dom"; // Import useSearchParams from react-router-dom
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
import { Anchor, Loader2, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

export default function ApplicationPage() {
  const [searchParams] = useSearchParams(); // Get the searchParams object
  const initialPosition = searchParams.get("position") || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: initialPosition,
    experience: "",
    coverLetter: "",
    resume: null,
    agreeToTerms: false,
  });
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  // Update position when URL param changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      position: initialPosition,
    }));
  }, [initialPosition]);

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
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Application submitted!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        coverLetter: "",
        resume: null,
        agreeToTerms: false,
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your application couldn't be submitted. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Apply Now | Tunza Care Home Care Support Services</title>
        <meta name="description" content="Join the Tunza Care team. Apply for our available positions in healthcare and support services." />
        <meta name="keywords" content="care jobs, healthcare careers, support worker positions, nursing jobs, care employment" />
        <link rel="canonical" href=" https://tunza-care.nmcyber.com/applications" />
      </Helmet>
    <main className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <Link to="/employment" className="inline-flex items-center text-[#1a6b9f] hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Employment Opportunities
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#1a6b9f] mb-2">
                Join Our Team
              </h1>
              <p className="text-gray-600">
                Fill out the form below to apply for a position at Tunza Care
                Services.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  onValueChange={(value) =>
                    handleSelectChange("position", value)
                  }
                  required
                >
                  <SelectTrigger id="position">
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="support-worker">Support Worker</SelectItem>
                    <SelectItem value="registered-nurse">
                      Registered Nurse / Enrolled Nurse
                    </SelectItem>
                    <SelectItem value="cleaners">
                      Cleaners
                    </SelectItem>
                    <SelectItem value="assistant-nurse">
                      Assistant in Nursing
                    </SelectItem>
                    <SelectItem value="catering-assistant">
                      Catering Assistant
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
                  onValueChange={(value) =>
                    handleSelectChange("experience", value)
                  }
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
                  className="min-h-[150px]"
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
                  onClick={() =>
                    document.getElementById("resume-upload-page").click()
                  }
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#1a6b9f]/10 flex items-center justify-center text-[#1a6b9f] mb-3">
                      <Anchor className="h-5 w-5" />
                    </div>
                    {formData.resume ? (
                      <p className="text-gray-700 mb-1">
                        File selected:{" "}
                        <span className="font-medium">
                          {formData.resume.name}
                        </span>
                      </p>
                    ) : (
                      <>
                        <p className="text-gray-700 mb-1">
                          Drop your resume here or{" "}
                          <span className="text-[#1a6b9f] underline">
                            Upload
                          </span>
                        </p>
                        <p className="text-gray-500 text-sm">
                          PDF, DOC, or DOCX (Max. 5MB)
                        </p>
                      </>
                    )}
                    <input
                      id="resume-upload-page"
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
                    setFormData((prev) => ({
                      ...prev,
                      agreeToTerms: checked,
                    }))
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
                    By submitting this application, I consent to Tunza Care
                    Services processing my personal data for recruitment
                    purposes.
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <Link to="/employment">
                  <Button
                    type="button"
                    variant="outline"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                </Link>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}