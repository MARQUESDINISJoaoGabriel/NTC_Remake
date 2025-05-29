"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, CheckCircle, Send, User, Star, Heart, Zap, Anchor, Waves } from "lucide-react";
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
    "🌊 Seamanship & Navigation",
    "⛵ Sailing & Watersports", 
    "⚓ Drill & Ceremonial",
    "👑 Leadership Development",
    "❤️ Community Service",
    "🎵 Band & Music",
    "🏃‍♂️ Sports & Fitness",
    "🔧 Engineering & Technical"
  ];

  const experienceLevels = [
    "🌟 Complete beginner - ready for adventure!",
    "🌊 Some experience with water activities",
    "⚓ Previous cadet experience (other organization)",
    "🎉 Former NTC cadet returning to the family!",
    "👨‍👩‍👧‍👦 Parent/family member was in NTC"
  ];

  const hearAboutOptions = [
    "🏫 School presentation",
    "👨‍👩‍👧‍👦 Friend or family recommendation",
    "🎪 Local event or parade",
    "📱 Social media",
    "🔍 Website search",
    "🏠 Local unit visit",
    "🤔 Other amazing way!"
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
      alert("Oops! There was an error sending your message. Please try again! 😊");
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
      title: "Our Amazing HQ! 🏠",
      details: ["Nautical Training Corps", "38A Bath Street", "Brighton BN1 3TB", "United Kingdom 🇬🇧"],
      color: "text-blue-600",
      bgGradient: "from-blue-100 to-cyan-100"
    },
    {
      icon: Mail,
      title: "Send Us Messages! 📧",
      details: ["General Questions: hq@ntc.org.uk", "Want to Join: join@ntc.org.uk", "Media Stuff: media@ntc.org.uk"],
      color: "text-green-600",
      bgGradient: "from-green-100 to-emerald-100"
    },
    {
      icon: Phone,
      title: "Call & Chat! 📞",
      details: ["+44 (0)1273 123456", "Monday - Friday", "9:00 AM - 5:00 PM"],
      color: "text-purple-600",
      bgGradient: "from-purple-100 to-pink-100"
    },
    {
      icon: Clock,
      title: "When We're Here! ⏰",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Relaxing day! 😴"],
      color: "text-orange-600",
      bgGradient: "from-orange-100 to-yellow-100"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 relative">
      {/* Fun floating elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <div className="bg-yellow-400 rounded-full p-3">
          <Mail className="w-6 h-6 text-blue-800" />
        </div>
      </div>
      <div className="absolute top-20 right-20 animate-pulse">
        <div className="bg-pink-400 rounded-full p-3">
          <Heart className="w-6 h-6 text-purple-800" />
        </div>
      </div>

      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-full px-6 py-3 inline-flex items-center gap-2 mb-6">
          <Mail className="w-5 h-5 text-blue-600" />
          <span className="text-blue-800 font-bold">Let's Be Friends! 💌</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Get In Touch With <span className="text-yellow-500">Us!</span> 🎉
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Ready to start your epic adventure? Got questions? Want to say hi? We LOVE hearing from amazing young people, 
          awesome parents, and anyone who wants to join our incredible NTC family! 🌟⚓
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12">
        <motion.div
          className="lg:col-span-1 space-y-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              How to Reach Our <span className="text-purple-600">Amazing Team!</span> 📞
            </h2>
            <p className="text-gray-600">We're always excited to hear from you!</p>
          </div>
          
          {contactInfo.map((info, index) => (
            <Card key={index} className={`hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br ${info.bgGradient} border-2 hover:border-purple-300 rounded-2xl`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center ${info.color} shadow-lg`}>
                    <info.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-800 mb-3 text-lg">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 mb-2 font-medium">
                        {detail.includes('@') ? (
                          <a href={`mailto:${detail.split(': ')[1] || detail}`} className="text-blue-600 hover:text-purple-600 hover:underline font-bold">
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

          <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-8 relative">
              <div className="absolute top-4 right-4 text-4xl animate-bounce">⚓</div>
              <h3 className="font-bold mb-4 flex items-center gap-3 text-xl">
                <Star className="w-6 h-6 text-yellow-300" />
                Super Cool Charity Info! 📜
              </h3>
              <p className="text-blue-100 leading-relaxed">
                The Nautical Training Corps is a registered charity in England and Wales (No. 306084)! 
                We're dedicated to helping amazing young people like YOU discover their superpowers through 
                epic maritime adventures and training! 🌊✨
              </p>
              <div className="mt-4 text-yellow-300 font-bold">
                🎯 Making dreams come true since 1944! 🎯
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Epic Contact Form */}
        <motion.div
          className="lg:col-span-2"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          {submitted ? (
            <Card className="border-4 border-green-300 bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl overflow-hidden">
              <CardContent className="p-12 text-center relative">
                {/* Celebration elements */}
                <div className="absolute top-6 left-6 animate-bounce">
                  <div className="bg-yellow-400 rounded-full p-2">
                    <Star className="w-5 h-5 text-green-800" />
                  </div>
                </div>
                <div className="absolute top-6 right-6 animate-pulse">
                  <div className="bg-pink-400 rounded-full p-2">
                    <Heart className="w-5 h-5 text-green-800" />
                  </div>
                </div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
                </motion.div>
                
                <h3 className="text-4xl font-bold text-green-800 mb-6">🎉 AWESOME! Message Sent! 🎉</h3>
                <p className="text-green-700 mb-8 text-xl leading-relaxed">
                  Your message just landed in our inbox and we're SO excited to hear from you! 
                  We'll get back to you super quickly (within 24 hours) and if you want to join our amazing family, 
                  we'll connect you with your local adventure crew! 🚀⚓
                </p>
                
                <div className="bg-white rounded-2xl p-6 border-4 border-green-200 mb-8">
                  <p className="text-lg font-bold text-green-600 mb-4 flex items-center justify-center gap-2">
                    <Zap className="w-6 h-6" />
                    What happens next? The exciting stuff! ✨
                  </p>
                  <ul className="text-green-700 space-y-3 text-left max-w-lg mx-auto">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">We'll review your awesome message and interests! 📋</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">Connect you with your local NTC adventure base! 🗺️</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">Arrange an epic visit or meeting! 🤝</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">Send you our amazing welcome pack! 📦</span>
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={handleResend}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 px-8 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  🌟 Send Another Message! 🌟
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-3 border-purple-200 rounded-3xl overflow-hidden bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                <CardTitle className="flex items-center gap-3 text-3xl font-bold">
                  <User className="w-8 h-8 text-yellow-300" />
                  Tell Us About Your Awesome Self! 🌟
                </CardTitle>
                <CardDescription className="text-blue-100 text-lg">
                  Fill out this super fun form and let's start your incredible NTC adventure! 
                  The more you tell us, the better we can help make your dreams come true! ⚓✨
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Personal Information */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                      👋 Let's Get to Know You!
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-bold text-blue-700 mb-2 block">
                          First Name * 🌟
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="border-2 border-blue-200 rounded-xl p-3 focus:border-purple-400 transition-colors"
                          placeholder="Your awesome first name!"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-bold text-blue-700 mb-2 block">
                          Last Name * 🎯
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="border-2 border-blue-200 rounded-xl p-3 focus:border-purple-400 transition-colors"
                          placeholder="Your amazing last name!"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-sm font-bold text-blue-700 mb-2 block">
                        Email Address * 📧
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="border-2 border-blue-200 rounded-xl p-3 focus:border-purple-400 transition-colors"
                        placeholder="your.awesome.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-bold text-blue-700 mb-2 block">
                        Phone Number 📱
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="border-2 border-blue-200 rounded-xl p-3 focus:border-purple-400 transition-colors"
                        placeholder="Optional but helpful!"
                      />
                    </div>
                  </div>

                  {/* Age and Experience */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                      🎂 Age & Experience Fun!
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="age" className="text-sm font-bold text-green-700 mb-2 block">
                          How Old Are You? (if you want to be a cadet) 🎈
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("age", value)} value={formData.age}>
                          <SelectTrigger className="border-2 border-green-200 rounded-xl p-3 focus:border-emerald-400 transition-colors">
                            <SelectValue placeholder="Pick your age!" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 12 }, (_, i) => i + 7).map(age => (
                              <SelectItem key={age} value={age.toString()}>
                                {age} years old! 🎉
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="ntcExperience" className="text-sm font-bold text-green-700 mb-2 block">
                          Your Maritime Adventure Level! 🌊
                        </Label>
                        <Select
                          onValueChange={(value) => handleInputChange("ntcExperience", value)}
                          value={formData.ntcExperience}
                        >
                          <SelectTrigger className="border-2 border-green-200 rounded-xl p-3 focus:border-emerald-400 transition-colors">
                            <SelectValue placeholder="Choose your level!" />
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

                  {/* Interested Divisions */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                    <Label className="text-xl font-bold text-purple-800 mb-4 block flex items-center gap-2">
                      ⚓ What Epic Adventures Interest You? (pick all the cool ones!)
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-56 overflow-auto border-2 border-purple-200 rounded-2xl p-4 bg-white">
                      {divisions.map((division) => (
                        <div key={division} className="flex items-center gap-3 p-2 hover:bg-purple-50 rounded-lg transition-colors">
                          <Checkbox
                            id={`division-${division}`}
                            checked={formData.interestedDivisions.includes(division)}
                            onCheckedChange={(checked: boolean) => handleDivisionChange(division, checked)}
                            className="border-2 border-purple-300"
                          />
                          <Label htmlFor={`division-${division}`} className="text-purple-700 cursor-pointer font-medium">
                            {division}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Parent/Guardian */}
                  <div>
                    <Label htmlFor="parentGuardianName" className="text-sm font-bold text-blue-700 mb-2 block">
                      Parent / Guardian Name (if you're under 18) 👨‍👩‍👧‍👦
                    </Label>
                    <Input
                      id="parentGuardianName"
                      type="text"
                      value={formData.parentGuardianName}
                      onChange={(e) => handleInputChange("parentGuardianName", e.target.value)}
                      className="border-2 border-blue-200 rounded-xl p-3 focus:border-purple-400 transition-colors"
                      placeholder="Your awesome parent/guardian's name!"
                    />
                  </div>

                  {/* How did you hear about us */}
                  <div>
                    <Label htmlFor="hearAboutUs" className="text-sm font-bold text-blue-700 mb-2 block">
                      How Did You Discover Our Amazing NTC? 🔍
                    </Label>
                    <Select
                      onValueChange={(value) => handleInputChange("hearAboutUs", value)}
                      value={formData.hearAboutUs}
                    >
                      <SelectTrigger className="border-2 border-blue-200 rounded-xl p-3 focus:border-purple-400 transition-colors">
                        <SelectValue placeholder="Tell us how you found us!" />
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
                    <Label htmlFor="message" className="text-sm font-bold text-blue-700 mb-2 block">
                      Your Epic Message / Questions! 💬
                    </Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us anything you want! What excites you? What questions do you have? We love hearing from you! 🌟"
                      className="border-2 border-blue-200 rounded-xl p-4 focus:border-purple-400 transition-colors"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => handleInputChange("newsletter", checked === true)}
                          className="border-2 border-orange-300"
                        />
                        <Label htmlFor="newsletter" className="text-orange-700 cursor-pointer font-bold flex items-center gap-2">
                          📧 Yes! Send me awesome newsletters with cool NTC updates!
                        </Label>
                      </div>

                      <div className="flex items-center gap-3">
                        <Checkbox
                          id="dataConsent"
                          required
                          checked={formData.dataConsent}
                          onCheckedChange={(checked) => handleInputChange("dataConsent", checked === true)}
                          className="border-2 border-orange-300"
                        />
                        <Label htmlFor="dataConsent" className="text-orange-700 cursor-pointer font-bold flex items-center gap-2">
                          🛡️ I'm cool with you keeping my info safe under GDPR rules! *
                        </Label>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white py-6 text-xl font-bold w-full rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {isLoading ? "Sending Your Awesome Message... 🚀" : (
                      <>
                        🌟 Send My Epic Message! 🌟 <Send className="inline-block w-6 h-6 ml-2" />
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