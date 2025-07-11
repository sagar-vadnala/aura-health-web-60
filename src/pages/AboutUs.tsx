import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleMap from '../components/GoogleMap';
import { Users, Award, Globe, Lightbulb, Heart, Target, Calendar, MapPin, Mail, Phone, Briefcase, Home } from 'lucide-react';
const AboutUs = () => {
  const stats = [{
    number: "50+",
    label: "Healthcare Partners"
  }, {
    number: "1M+",
    label: "Patients Served"
  }, {
    number: "99.9%",
    label: "System Uptime"
  }, {
    number: "24/7",
    label: "Support Available"
  }];
  const foundingTeam = [{
    name: "Dr. Sarah Johnson",
    role: "Chief Executive Officer & Co-Founder",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face"
  }, {
    name: "Michael Chen",
    role: "Chief Technology Officer & Co-Founder",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face"
  }, {
    name: "Dr. Emily Rodriguez",
    role: "Chief Medical Officer & Co-Founder",
    image: "https://images.unsplash.com/photo-1594824475518-6a2a522b2fa3?w=400&h=500&fit=crop&crop=face"
  }, {
    name: "David Kim",
    role: "Chief Product Officer & Co-Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
  }];
  const teamMembers = [{
    name: "Dr. Lisa Park",
    role: "Senior AI Researcher",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face"
  }, {
    name: "James Wilson",
    role: "Lead Software Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face"
  }, {
    name: "Dr. Maria Santos",
    role: "Clinical Data Scientist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face"
  }, {
    name: "Alex Thompson",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face"
  }, {
    name: "Dr. Rachel Green",
    role: "Healthcare Solutions Architect",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop&crop=face"
  }, {
    name: "Carlos Martinez",
    role: "Machine Learning Engineer",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=500&fit=crop&crop=face"
  }, {
    name: "Dr. Jennifer Lee",
    role: "Medical Informatics Specialist",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=500&fit=crop&crop=face"
  }, {
    name: "Robert Johnson",
    role: "Security Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face"
  }, {
    name: "Dr. Amanda Davis",
    role: "Clinical Research Lead",
    image: "https://images.unsplash.com/photo-1494790108755-2616c0763d5a?w=400&h=500&fit=crop&crop=face"
  }, {
    name: "Kevin Brown",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=500&fit=crop&crop=face"
  }, {
    name: "Dr. Samantha Taylor",
    role: "UX Research Lead",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop&crop=face"
  }, {
    name: "Thomas Anderson",
    role: "Data Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face"
  }, {
    name: "Dr. Nicole White",
    role: "Quality Assurance Lead",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=500&fit=crop&crop=face"
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-[20px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Hikigai AI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hikigai is a cutting-edge health tech company leveraging artificial intelligence to transform the way healthcare is delivered and experienced. Our personalized, proactive, and intelligent AI-powered solutions empower both patients and providers, improving diagnostic accuracy, streamlining workflows, and elevating the overall patient experience.</p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-gray-50 py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 px-[40px] py-[20px]">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Globe className="text-purple-600" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">Organize Healthcare Knowledge to enable Personalized Medicine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 py-[20px] px-[5px]">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Target className="text-purple-600" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">Make Healthcare More Human</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Leadership</h3>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {foundingTeam.map((member, index) => <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-md transition-shadow duration-200 border border-gray-100 px-[4px] py-[4px]">
                <div className="mb-6">
                  <img src={member.image} alt={member.name} className="w-48 h-56 rounded-lg object-cover mx-auto" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-purple-600 text-sm">{member.role}</p>
              </div>)}
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Product &amp; Engineering Team</h3>
            
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-md transition-shadow duration-200 border border-gray-100 py-[4px] px-[4px]">
                <div className="mb-6">
                  <img src={member.image} alt={member.name} className="w-48 h-56 rounded-lg object-cover mx-auto" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-purple-600 text-sm">{member.role}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Contact + Location */}
      <section className="bg-gray-50 py-[20px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact & Location</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Headquarters</h4>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-purple-600 mt-1" size={20} />
                  <div>
                    <p className="text-gray-900 font-medium">Hikigai AI</p>
                    <p className="text-gray-600">123 Healthcare Innovation Drive</p>
                    <p className="text-gray-600">Novi, Michigan US</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-purple-600" size={20} />
                  <p className="text-gray-900">contact@hikigai.ai</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-purple-600" size={20} />
                  <p className="text-gray-900">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Global Presence</h4>
                <p className="text-gray-600 mb-6">Headquartered in Novi, Michigan US, our remote-first culture means our team spans across US & India.</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Find Us Here</h4>
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-white py-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Careers</h4>
            <p className="text-lg text-gray-600 mb-8">Join Us and transform Healthcare</p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-semibold shadow-lg">
              Open Positions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default AboutUs;