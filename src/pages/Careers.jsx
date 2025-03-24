import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

import { Check, Search, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import { ApplicationFormDialog } from "@/components/Employment/application-form-dialog"
import CareersHero from "@/components/careers/CareersHero"
import CareersWhyWorkWithUs from "@/components/careers/CareersWhyWorkWithUs"
import CareersTestimonials from "@/components/careers/CareersTestimonials"
import CareersFAQs from "@/components/careers/CareersFAQs"
import CareersCTA from "@/components/careers/CareersCTA"
import { containerVariants, itemVariants } from "@/components/careers/FramerVariants"
import { jobListings } from "@/components/careers/CareersConstants"

export default function CareersPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
  
    // Filter jobs based on search term and category
    const filteredJobs = jobListings.filter((job) => {
        const matchesSearch =
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase());
      
        const matchesCategory =
          selectedCategory === "all" || job.category.toLowerCase() === selectedCategory.toLowerCase();
      
        console.log(
          "Filtering: Job:", job.title, 
          "| Category:", job.category, 
          "| Selected:", selectedCategory, 
          "| Matches:", matchesCategory
        );
      
        return matchesSearch && matchesCategory;
      });
      
      
      
    // console.log("Filtered jobs:", filteredJobs);  
    // console.log("Selected category:", selectedCategory)
    // console.log("Filtered jobs:", filteredJobs)
  
    return (
      <main className="min-h-screen pt-8">
        {/* Hero Section */}
        <CareersHero />
        {/* Why Work With Us Section */}
        <CareersWhyWorkWithUs />
        {/* Current Openings Section */}
        <section id="current-openings" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4 px-3 py-1 text-sm font-medium rounded-full">
                Open Positions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Current <span className="text-[#1a6b9f]">Job Openings</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                Explore our current opportunities and find a role where you can make a difference while growing your
                career.
              </p>
  
              {/* Search and filter */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="text"
                      placeholder="Search positions..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Tabs
                        value={selectedCategory}
                        onValueChange={(value) => {
                            console.log("Category changed to:", value);
                            setSelectedCategory(value);
                        }}
                        className="w-full sm:w-auto"
                        >
                        <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full sm:w-auto">
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="support">Support</TabsTrigger>
                            <TabsTrigger value="nursing">Nursing</TabsTrigger>
                            <TabsTrigger value="admin">Admin</TabsTrigger>
                        </TabsList>
                        </Tabs>


                </div>
              </div>
            </motion.div>
  
            {/* Job listings */}
            <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            >
            {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                <motion.div key={job.id} variants={itemVariants}> {/* Changed key to job.id */}
                    <Card className="h-full border-none shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                        <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <Badge
                            className={`
                                ${
                                job.type === "Full-time"
                                    ? "bg-blue-100 text-blue-700"
                                    : job.type === "Part-time"
                                    ? "bg-purple-100 text-purple-700"
                                    : "bg-amber-100 text-amber-700"
                                }
                                px-2.5 py-0.5 text-xs font-medium rounded-full
                            `}
                            >
                            {job.type}
                            </Badge>
                            <span className="text-sm text-gray-500">
                            Posted:{" "}
                            {new Date(job.postedDate).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                            })}
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <div className="flex items-center text-gray-600 mb-4">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{job.location}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        <div className="mb-6">
                            <p className="font-medium mb-2">Requirements:</p>
                            <ul className="space-y-1">
                            {job.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-600">
                                <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                <span>{req}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                        </div>
                        <div className="border-t border-gray-100 p-4 bg-gray-50">
                        <ApplicationFormDialog buttonText="Apply Now" buttonVariant="default" position={job.title} />
                        </div>
                    </CardContent>
                    </Card>
                </motion.div>
                ))
            ) : (
                <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No positions match your search criteria.</p>
                <Button
                    variant="outline"
                    onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    }}
                >
                    Clear Filters
                </Button>
                </div>
            )}
            </motion.div>
  
            {/* No positions currently available fallback - uncomment if needed */}
            {jobListings.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">No Positions Currently Available</h3>
                <p className="text-gray-600 mb-6">
                  We don't have any open positions at the moment, but we're always looking for talented individuals to join our team.
                </p>
                <Button variant="outline">
                  Submit Your Resume
                </Button>
              </div>
            )}
          </div>
        </section>
  
        {/* Testimonials Section */}
        <CareersTestimonials />
        {/* Application Process Section */}
        <CareersTestimonials />
        {/* FAQ Section */}
        <CareersFAQs />
        {/* CTA Section */}
        <CareersCTA />
      </main>
    )
  }

