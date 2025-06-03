import React from 'react';
import { Anchor, Shield, Users, Calendar, Award, Compass, Ship, Waves, Star } from 'lucide-react';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section className="bg-blue-900 text-white py-16 relative overflow-hidden">
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-white opacity-10">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160L1200,160L1200,200L0,200Z"></path>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-400 rounded-lg p-2">
                <Anchor className="w-6 h-6 text-blue-900" />
              </div>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-lg text-sm font-medium">
                Established 1944
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to the <span className="text-yellow-400">NTC</span>
            </h1>
            <p className="text-xl leading-relaxed mb-8 text-blue-100">
              Ready to challenge yourself? Join thousands of young people developing real maritime skills, 
              building lasting friendships, and discovering what you're truly capable of achieving.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium">Ages 7-18</span>
                </div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                <div className="flex items-center gap-2">
                  <Ship className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium">60+ Training Units</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg aspect-[4/3] flex items-center justify-center shadow-2xl overflow-hidden">
              <Image src={'/images/ntc-cadets.jpg'} alt='NTC Cadets in Training' width={500} height={500} className='w-full h-full object-cover'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// History Component
const HistorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-lg px-4 py-2 mb-4">
            <Compass className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">Our Heritage</span>
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            <span className="text-yellow-500">80+ Years</span> of Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings in Brighton to a nationwide youth organization
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Image src="/images/NTCensign.gif" alt="NTC History" width={500} height={500} />
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-yellow-400">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-yellow-100 rounded-lg p-2">
                  <Calendar className="w-5 h-5 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">1944 - The Beginning</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                During World War II, at Richmond Road School in Brighton, the Nautical Training Corps 
                was founded with a vision to provide structured maritime education and character 
                development for young people.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-blue-400">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Ship className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">National Expansion</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                From that single unit, we've grown to over 60 Training Ships across the UK. 
                Each unit maintains the highest standards of maritime training while fostering 
                local community connections.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-red-400">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-red-100 rounded-lg p-2">
                  <Star className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Modern Excellence</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Today, our National Seamanship Training Centre in Portsmouth Harbour provides 
                world-class facilities for advanced maritime training and skill development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Founder Component
const FounderSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-lg px-4 py-2 mb-4">
            <Award className="w-5 h-5 text-yellow-700" />
            <span className="text-yellow-800 font-semibold">Our Founder</span>
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Commander <span className="text-yellow-500">Frank Froëst-Carr</span>
          </h2>
          <p className="text-xl text-gray-600">The visionary who established our organization</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <Image src="/images/fro-carr.jpg" alt="Commander Frank Froëst-Carr" width={300} height={400} className="w-full h-full object-cover rounded-lg shadow-lg" />  
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                Commander Frank Froëst-Carr OBE NTC
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  A distinguished Royal Navy officer with extensive maritime experience, 
                  Commander Frank Froëst-Carr recognized the potential for structured youth 
                  development through nautical training and seamanship education.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  His vision was to create an organization that would instill discipline, 
                  confidence, and practical skills in young people, preparing them for future 
                  leadership roles while fostering a deep appreciation for maritime heritage.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Ship className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-blue-900">Naval Heritage</h4>
                  </div>
                  <p className="text-gray-600">Distinguished Royal Navy service and expertise</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-6 h-6 text-yellow-600" />
                    <h4 className="font-bold text-yellow-800">Lasting Legacy</h4>
                  </div>
                  <p className="text-gray-600">80+ years of youth development excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Anniversary Component
const AnniversarySection = () => {
  return (
    <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white bg-opacity-20 rounded-lg px-6 py-3 mb-6">
            <Calendar className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-semibold">MILESTONE CELEBRATION</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-yellow-400">81 Years</span> of Excellence
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Celebrating over eight decades of outstanding youth development 
            and maritime training across the United Kingdom.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-4 text-yellow-400">A Remarkable Achievement</h3>
              <p className="text-blue-100 leading-relaxed mb-4 text-lg">
                Over 80 years of continuous operation represents an extraordinary commitment to youth 
                development. Thousands of young people have benefited from our programs, developing 
                skills that serve them throughout their lives.
              </p>
              <p className="text-blue-100 leading-relaxed text-lg">
                From 1944 to today, the NTC has maintained its founding principles while adapting 
                to meet the evolving needs of each generation.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400 mb-2">81+</div>
                <div className="text-blue-200 text-sm">Years of Service</div>
              </div>
              <div className="text-center bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400 mb-2">1000s</div>
                <div className="text-blue-200 text-sm">Lives Transformed</div>
              </div>
              <div className="text-center bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400 mb-2">60+</div>
                <div className="text-blue-200 text-sm">Active Units</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Image src="/images/ntc-81years.png" alt="Anniversary Celebration" width={500} height={400} className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white bg-opacity-10 rounded-lg p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Building the Future</h3>
            <p className="text-blue-100 leading-relaxed text-lg">
              While we celebrate our rich history, we remain focused on the future. Every day 
              brings new opportunities to inspire and develop the next generation of maritime 
              enthusiasts and future leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Mission and Values Component
const MissionValuesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-lg px-4 py-2 mb-4">
            <Compass className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">Our Purpose</span>
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Mission & <span className="text-yellow-500">Core Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Developing confident, capable young people through maritime excellence
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Image src="/images/ntc-mission.png" alt="NTC Mission" width={500} height={400} className="w-full h-full object-cover rounded-lg shadow-lg" />
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-400">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                <Star className="w-7 h-7 text-yellow-500" />
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To develop young people through nautical training aligned with Merchant Navy traditions, 
                fostering discipline, respect, confidence, and community spirit in a safe, inclusive environment 
                that challenges individuals to reach their full potential.
              </p>
            </div>
            
            <div className="grid gap-4">
              {[
                { 
                  title: "Discipline", 
                  desc: "Building character through structured training and personal responsibility",
                  color: "bg-red-50 border-red-200 text-red-800"
                },
                { 
                  title: "Respect", 
                  desc: "Honoring maritime traditions while embracing diversity and inclusion",
                  color: "bg-blue-50 border-blue-200 text-blue-800"
                },
                { 
                  title: "Leadership", 
                  desc: "Developing confident leaders who inspire and guide others",
                  color: "bg-yellow-50 border-yellow-200 text-yellow-800"
                },
                { 
                  title: "Seamanship", 
                  desc: "Mastering practical maritime skills and nautical knowledge",
                  color: "bg-green-50 border-green-200 text-green-800"
                }
              ].map((value, index) => (
                <div key={index} className={`${value.color} rounded-lg p-4 border-l-4 border-l-current`}>
                  <h4 className="font-bold text-lg mb-1">{value.title}</h4>
                  <p className="text-sm opacity-90">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Organization Structure Component
const OrganizationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-lg px-4 py-2 mb-4">
            <Ship className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">Our Structure</span>
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Professional <span className="text-yellow-500">Organization</span>
          </h2>
          <p className="text-xl text-gray-600">Governance and operations designed for excellence</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-white rounded-lg w-20 h-20 flex items-center justify-center mb-6 mx-auto shadow-md">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Legal Status</h3>
            <p className="text-gray-700 mb-4">
              Registered charity in England and Wales (No. 306084), operating under strict 
              governance standards and comprehensive safeguarding policies.
            </p>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="font-bold text-blue-900">Our Patron</p>
              <p className="text-sm text-gray-600">Rear Admiral John Lippiett CB CBE DL</p>
              <p className="text-xs text-blue-600 mt-1">Distinguished naval leader</p>
            </div>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-white rounded-lg w-20 h-20 flex items-center justify-center mb-6 mx-auto shadow-md">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Training Ships</h3>
            <p className="text-gray-700 mb-4">
              Over 60 Training Ships across the UK, each named after Royal Navy vessels 
              and maintaining the highest standards of youth development.
            </p>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="font-bold text-blue-900">Open to All</p>
              <p className="text-sm text-gray-600">Ages 7-18, all backgrounds welcome</p>
              <p className="text-xs text-blue-600 mt-1">Inclusive and accessible</p>
            </div>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-white rounded-lg w-20 h-20 flex items-center justify-center mb-6 mx-auto shadow-md">
              <Anchor className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Training Centre</h3>
            <p className="text-gray-700 mb-4">
              The National Seamanship Training Centre (NSTC Lion) in Portsmouth Harbour 
              provides advanced maritime training facilities and programs.
            </p>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="font-bold text-blue-900">NSTC Lion</p>
              <p className="text-sm text-gray-600">Portsmouth Harbour</p>
              <p className="text-xs text-blue-600 mt-1">World-class facilities</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to Join Our Community?</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Whether you're seeking personal development, maritime skills, or lasting friendships, 
              the NTC offers a structured pathway to achievement and success. Discover your potential 
              with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main About Page Component
const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <AboutUsSection />
      <HistorySection />
      <FounderSection />
      <AnniversarySection />
      <MissionValuesSection />
      <OrganizationSection />
    </main>
  );
};

export default AboutPage;