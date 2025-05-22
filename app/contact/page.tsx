"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, CheckCircle, Send, User, Calendar, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    ntcExperience: "",
    interestedDivisions: [],
    parentGuardianName: "",
    hearAboutUs: "",
    message: "",
    newsletter: false,
    dataConsent: false
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const divisions = [
    "Seamanship & Navigation",
    "Sailing & Watersports", 
    "Drill & Ceremonial",
    "Leadership Development",
    "Community Service",
    "Band & Music",
    "Sports & Fitness",
    "Engineering & Technical"
  ];

  const experienceLevels = [
    "Complete beginner",
    "Some experience with water activities", 
    "Previous cadet experience (other organization)",
    "Former NTC cadet returning",
    "Parent/family member was in NTC"
  ];

  const hearAboutOptions = [
    "School presentation",
    "Friend or family recommendation",
    "Local event or parade",
    "Social media",
    "Website search",
    "Local unit visit",
    "Other"
  ];

  const handleInputChange = (name: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDivisionChange = (division: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interestedDivisions: checked 
        ? [...prev.interestedDivisions, division]
        : prev.interestedDivisions.filter(d => d !== division)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsLoading(false);
    console.log("Enhanced contact form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters Address",
      details: ["Nautical Training Corps", "38A Bath Street", "Brighton BN1 3TB", "United Kingdom"],
      color: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Contact",
      details: ["General Enquiries: hq@ntc.org.uk", "Recruitment: join@ntc.org.uk", "Press: media@ntc.org.uk"],
      color: "text-green-600"
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+44 (0)1273 123456", "Monday - Friday", "9:00 AM - 5:00 PM"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
      color: "text-orange-600"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="outline" className="mb-4 text-ntcBlue border-ntcBlue">
          <Mail className="w-4 h-4 mr-2" />
          Get in Touch
        </Badge>
        <h1 className="text-5xl font-bold text-ntcBlue mb-6 bg-gradient-to-r from-ntcBlue to-blue-600 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Whether you're a young person interested in joining, a parent with questions, or someone looking to volunteer — we'd love to hear from you!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <motion.div 
          className="lg:col-span-1 space-y-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
          
          {contactInfo.map((info, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center ${info.color}`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-slate-600 text-sm mb-1">
                        {detail.includes('@') ? (
                          <a href={`mailto:${detail.split(': ')[1] || detail}`} className="text-ntcBlue hover:underline">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-gradient-to-br from-ntcBlue to-blue-600 text-white">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Charity Information
              </h3>
              <p className="text-blue-100 text-sm">
                The Nautical Training Corps is a registered charity in England and Wales (No. 306084), 
                dedicated to developing young people through maritime adventure and training.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Contact Form */}
        <motion.div 
          className="lg:col-span-2"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          {submitted ? (
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
                <p className="text-green-700 mb-6">
                  We've received your message and will get back to you within 24 hours. 
                  If you're interested in joining, we'll connect you with your nearest unit.
                </p>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-green-600 font-medium">What happens next?</p>
                  <ul className="text-sm text-green-700 mt-2 text-left space-y-1">
                    <li>• We'll review your enquiry and interests</li>
                    <li>• Connect you with your local NTC unit</li>
                    <li>• Arrange a visit or meeting if requested</li>
                    <li>• Send you our welcome pack and information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <User className="w-6 h-6 text-ntcBlue" />
                  Tell Us About Yourself
                </CardTitle>
                <CardDescription>
                  Fill out this form to get in touch. The more details you provide, the better we can help you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="mt-1"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="mt-1"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1"
                        placeholder="Optional contact number"
                      />
                    </div>
                  </div>

                  {/* Age and Experience */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age" className="text-sm font-medium text-slate-700">
                        Age (if applying as cadet)
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("age", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="7-9">7-9 years</SelectItem>
                          <SelectItem value="10-12">10-12 years</SelectItem>
                          <SelectItem value="13-15">13-15 years</SelectItem>
                          <SelectItem value="16-18">16-18 years</SelectItem>
                          <SelectItem value="adult">Adult (volunteer/parent)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="ntcExperience" className="text-sm font-medium text-slate-700">
                        Previous Experience
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("ntcExperience", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your experience" />
                        </SelectTrigger>
                        <SelectContent>
                          {experienceLevels.map((level) => (
                            <SelectItem key={level} value={level}>{level}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Parent/Guardian Info for minors */}
                  <div>
                    <Label htmlFor="parentGuardianName" className="text-sm font-medium text-slate-700">
                      Parent/Guardian Name (if applicant under 18)
                    </Label>
                    <Input
                      id="parentGuardianName"
                      type="text"
                      value={formData.parentGuardianName}
                      onChange={(e) => handleInputChange("parentGuardianName", e.target.value)}
                      className="mt-1"
                      placeholder="Parent or guardian's full name"
                    />
                  </div>

                  {/* Interested Divisions */}
                  <div>
                    <Label className="text-sm font-medium text-slate-700 mb-3 block">
                      What activities interest you most? (Select all that apply)
                    </Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {divisions.map((division) => (
                        <div key={division} className="flex items-center space-x-2">
                          <Checkbox
                            id={division}
                            checked={formData.interestedDivisions.includes(division)}
                            onCheckedChange={(checked) => handleDivisionChange(division, checked as boolean)}
                          />
                          <Label
                            htmlFor={division}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {division}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How did you hear about us */}
                  <div>
                    <Label htmlFor="hearAboutUs" className="text-sm font-medium text-slate-700">
                      How did you hear about the NTC?
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("hearAboutUs", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {hearAboutOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us more about your interest in the NTC, any questions you have, or what you'd like to know..."
                    />
                  </div>

                  {/* Consent and Newsletter */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="dataConsent"
                        required
                        checked={formData.dataConsent}
                        onCheckedChange={(checked) => handleInputChange("dataConsent", checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="dataConsent" className="text-sm leading-relaxed cursor-pointer">
                        I consent to the NTC storing and processing my personal data to respond to this enquiry. 
                        Your data will be handled in accordance with our privacy policy. *
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="newsletter" className="text-sm leading-relaxed cursor-pointer">
                        I'd like to receive occasional updates about NTC activities, events, and news via email.
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-ntcBlue hover:bg-blue-600 text-white py-3 text-lg font-semibold"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>

      {/* Additional Information */}
      <motion.div 
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Card className="bg-gradient-to-br from-slate-50 to-white border-2">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">What age can my child join?</h3>
                <p className="text-slate-600 text-sm mb-4">
                  We welcome young people aged 7-18 years old. Different age groups have activities suited to their development level.
                </p>
                
                <h3 className="font-semibold text-slate-800 mb-2">How much does it cost?</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Most units charge modest weekly subscriptions (typically £1-3). Uniform is usually provided or available at cost.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Do I need swimming experience?</h3>
                <p className="text-slate-600 text-sm mb-4">
                  No prior experience needed! We teach water safety and swimming as part of our training program.
                </p>
                
                <h3 className="font-semibold text-slate-800 mb-2">How often do cadets meet?</h3>
                <p className="text-slate-600 text-sm">
                  Most units meet once or twice weekly, with additional weekend activities and optional camps during holidays.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}