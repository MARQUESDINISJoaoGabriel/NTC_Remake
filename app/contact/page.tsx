"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, CheckCircle, Send, User, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    ntcExperience: '',
    interestedDivisions: [],
    parentGuardianName: '',
    hearAboutUs: '',
    message: '',
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send");

      setSubmitted(true);
    } catch (error) {
      alert("There was an error sending your message.");
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

                {/* Resend Button */}
                <Button
                  onClick={handleResend}
                  className="mt-8 bg-ntcBlue hover:bg-blue-600 text-white py-3 text-lg font-semibold"
                >
                  Send Another Message
                </Button>
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
                      <Select onValueChange={(value) => handleInputChange("age", value)} value={formData.age}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select age" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 18 }, (_, i) => i + 9).map(age => (
                            <SelectItem key={age} value={age.toString()}>
                              {age}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="ntcExperience" className="text-sm font-medium text-slate-700">
                        Experience with NTC / Maritime Activities
                      </Label>
                      <Select
                        onValueChange={(value) => handleInputChange("ntcExperience", value)}
                        value={formData.ntcExperience}
                      >
                        <SelectTrigger className="mt-1">
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

                  {/* Interested Divisions */}
                    <div>
                      <Label className="text-sm font-medium text-slate-700 mb-1">
                        Interested Divisions (select all that apply)
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-44 overflow-auto border border-slate-200 rounded p-3 bg-slate-50">
                        {divisions.map((division) => (
                          <div key={division} className="flex items-center">
                            <Checkbox
                              id={`division-${division}`}
                              checked={formData.interestedDivisions.includes(division)}
                              onCheckedChange={(checked: boolean) => handleDivisionChange(division, checked)}
                            />
                            <Label htmlFor={`division-${division}`} className="ml-2 text-sm text-slate-700 cursor-pointer">
                              {division}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>


                  {/* Parent/Guardian Name */}
                  <div>
                    <Label htmlFor="parentGuardianName" className="text-sm font-medium text-slate-700">
                      Parent / Guardian Name (if cadet under 18)
                    </Label>
                    <Input
                      id="parentGuardianName"
                      type="text"
                      value={formData.parentGuardianName}
                      onChange={(e) => handleInputChange("parentGuardianName", e.target.value)}
                      className="mt-1"
                      placeholder="Optional"
                    />
                  </div>

                  {/* How did you hear about us? */}
                  <div>
                    <Label htmlFor="hearAboutUs" className="text-sm font-medium text-slate-700">
                      How did you hear about us?
                    </Label>
                    <Select
                      onValueChange={(value) => handleInputChange("hearAboutUs", value)}
                      value={formData.hearAboutUs}
                    >
                      <SelectTrigger className="mt-1">
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

                  {/* Message dwd*/}
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                      Your Message / Questions
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Write your message here..."
                      className="mt-1"
                    />
                  </div>

                  {/* Newsletter and Consent */}
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="flex items-center">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked === true)}
                      />
                      <Label htmlFor="newsletter" className="ml-2 text-sm text-slate-700 cursor-pointer">
                        Subscribe to newsletter
                      </Label>
                    </div>

                    <div className="flex items-center">
                      <Checkbox
                        id="dataConsent"
                        required
                        checked={formData.dataConsent}
                        onCheckedChange={(checked) => handleInputChange("dataConsent", checked === true)}
                      />
                      <Label htmlFor="dataConsent" className="ml-2 text-sm text-slate-700 cursor-pointer">
                        I consent to data processing under GDPR *
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-ntcBlue hover:bg-blue-600 text-white py-3 text-lg font-semibold w-full"
                  >
                    {isLoading ? "Sending..." : (
                      <>
                        Send Message <Send className="inline-block w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </main>
  );
}