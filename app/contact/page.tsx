"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, CheckCircle, Send, User, Star} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ContactPage() {
  type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    age: string;
    ntcExperience: string;
    interestedDivisions: string[];
    parentGuardianName: string;
    hearAboutUs: string;
    message: string;
    newsletter: boolean;
    dataConsent: boolean;
  };
  
  const [formData, setFormData] = useState<FormData>({
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
    dataConsent: false,
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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send");

      setSubmitted(true);
    } catch (error) {
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    setFormData({
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
    setSubmitted(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["Nautical Training Corps", "38A Bath Street", "Brighton BN1 3TB", "United Kingdom"],
      color: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Contact",
      details: ["General Enquiries: hq@ntc.org.uk", "Recruitment: join@ntc.org.uk", "Media: media@ntc.org.uk"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+44 (0)1273 123456", "Monday - Friday", "9:00 AM - 5:00 PM"],
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
      color: "text-blue-600"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-blue-50 border border-blue-200 rounded-full px-6 py-2 inline-flex items-center gap-2 mb-6">
          <Mail className="w-5 h-5 text-blue-600" />
          <span className="text-blue-800 font-semibold">Get in Touch</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">
          Contact Us
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Whether you're interested in joining, have questions about our programs, or want to get involved, 
          we'd be happy to hear from you. Reach out and discover what the NTC can offer.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12">
        <motion.div
          className="lg:col-span-1 space-y-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h2>
          
          {contactInfo.map((info, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white rounded-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center ${info.color}`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 mb-1">
                        {detail.includes("@") ? (
                          <a href={`mailto:${detail.split(": ")[1] || detail}`} className="text-blue-600 hover:text-blue-700 hover:underline">
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

          <Card className="bg-blue-900 text-white border-0 rounded-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Charity Information
              </h3>
              <p className="text-blue-100">
                The Nautical Training Corps is a registered charity in England and Wales (No. 306084),
                dedicated to developing young people through maritime training and personal development programs.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="lg:col-span-2"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          {submitted ? (
            <Card className="border-2 border-green-200 bg-green-50 rounded-lg">
              <CardContent className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
                <p className="text-green-700 mb-6">
                  We've received your message and will get back to you within 24 hours.
                  If you're interested in joining, we'll connect you with your nearest unit.
                </p>
                
                <div className="bg-white rounded-lg p-4 border border-green-200 mb-6">
                  <p className="text-sm text-green-600 font-medium mb-2">What happens next?</p>
                  <ul className="text-sm text-green-700 text-left space-y-1">
                    <li>• We'll review your enquiry and interests</li>
                    <li>• Connect you with your local NTC unit</li>
                    <li>• Arrange a visit or meeting if requested</li>
                    <li>• Send you our information pack</li>
                  </ul>
                </div>

                <Button
                  onClick={handleResend}
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold"
                >
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="border border-gray-200 rounded-lg bg-white">
              <CardHeader className="bg-blue-900 text-white p-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <User className="w-6 h-6 text-yellow-400" />
                  Get in Touch
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Complete this form to contact us. We"ll respond promptly and help you take the next steps.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-1 block">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-1 block">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  {/* Age and Experience */}
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Background Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="age" className="text-sm font-medium text-gray-700 mb-1 block">
                          Age (if applying as cadet)
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("age", value)} value={formData.age}>
                          <SelectTrigger className="border border-gray-300 rounded-lg">
                            <SelectValue placeholder="Select age" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 12 }, (_, i) => i + 7).map(age => (
                              <SelectItem key={age} value={age.toString()}>
                                {age} years old
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="ntcExperience" className="text-sm font-medium text-gray-700 mb-1 block">
                          Experience Level
                        </Label>
                        <Select
                          onValueChange={(value) => handleInputChange("ntcExperience", value)}
                          value={formData.ntcExperience}
                        >
                          <SelectTrigger className="border border-gray-300 rounded-lg">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            {experienceLevels.map(level => (
                              <SelectItem key={level} value={level}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Interested Areas */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Areas of Interest (select all that apply)
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 border border-gray-300 rounded-lg bg-gray-50 max-h-40 overflow-y-auto">
                      {divisions.map((division) => (
                        <div key={division} className="flex items-center gap-2">
                          <Checkbox
                            id={`division-${division}`}
                            checked={formData.interestedDivisions.includes(division)}
                            onCheckedChange={(checked: boolean) => handleDivisionChange(division, checked)}
                            className="border-blue-300"
                          />
                          <Label htmlFor={`division-${division}`} className="text-sm text-gray-700 cursor-pointer">
                            {division}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Parent/Guardian Name */}
                  <div>
                    <Label htmlFor="parentGuardianName" className="text-sm font-medium text-gray-700 mb-1 block">
                      Parent/Guardian Name (if under 18)
                    </Label>
                    <Input
                      id="parentGuardianName"
                      type="text"
                      value={formData.parentGuardianName}
                      onChange={(e) => handleInputChange("parentGuardianName", e.target.value)}
                      className="border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Optional"
                    />
                  </div>

                  {/* How did you hear about us */}
                  <div>
                    <Label htmlFor="hearAboutUs" className="text-sm font-medium text-gray-700 mb-1 block">
                      How did you hear about us?
                    </Label>
                    <Select
                      onValueChange={(value) => handleInputChange("hearAboutUs", value)}
                      value={formData.hearAboutUs}
                    >
                      <SelectTrigger className="border border-gray-300 rounded-lg">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {hearAboutOptions.map(option => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1 block">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your interests, questions, or how we can help you..."
                      className="border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked === true)}
                        className="border-blue-300"
                      />
                      <Label htmlFor="newsletter" className="text-sm text-gray-700 cursor-pointer">
                        Subscribe to our newsletter for updates and events
                      </Label>
                    </div>

                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="dataConsent"
                        required
                        checked={formData.dataConsent}
                        onCheckedChange={(checked) => handleInputChange("dataConsent", checked === true)}
                        className="border-blue-300"
                      />
                      <Label htmlFor="dataConsent" className="text-sm text-gray-700 cursor-pointer">
                        I consent to the processing of my data under GDPR regulations *
                      </Label>
                    </div>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold w-full"
                  >
                    {isLoading ? "Sending..." : (
                      <>
                        Send Message <Send className="inline-block w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </main>
  );
}