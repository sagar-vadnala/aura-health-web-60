import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Brain, Calendar, Play, ArrowRight, Shield, Zap, Users, Clock, Database, Award, BarChart, Globe, Lock } from 'lucide-react';
const AIProductsPage = () => {
  const products = [{
    id: 'ai-scribe',
    icon: FileText,
    title: "AI Scribe",
    subtitle: "Revolutionary AI-powered clinical documentation system",
    heroDescription: "AI-Powered clinical documentation system to transform doctor-patient conversations into structured medical records in real-time with 98% accuracy.",
    bgGradient: "from-purple-100 via-blue-50 to-purple-50",
    features: [{
      icon: Shield,
      title: "Real-time speech-to-text transcription",
      description: "Convert conversations to text instantly with 98% accuracy"
    }, {
      icon: Database,
      title: "Automatic ICD / CPT Codes Generation",
      description: "Generate accurate medical codes automatically"
    }, {
      icon: FileText,
      title: "Clinical note generation",
      description: "Create comprehensive clinical notes from conversations"
    }, {
      icon: Shield,
      title: "HIPAA compliant security",
      description: "Enterprise-grade security and compliance"
    }, {
      icon: Award,
      title: "Multi-specialty support",
      description: "Supports all medical specialties and practices"
    }],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
  }, {
    id: 'smart-app',
    icon: Brain,
    title: "Smart App",
    subtitle: "Intelligent web platform for healthcare professionals",
    heroDescription: "Intelligent web platform to empower healthcare professionals with AI-powered clinical decision support, patient management tools, and advanced analytics for improved care delivery.",
    bgGradient: "from-blue-100 via-cyan-50 to-blue-50",
    features: [{
      icon: Brain,
      title: "AI-powered clinical decision support",
      description: "Intelligent recommendations based on patient data and evidence-based medicine"
    }, {
      icon: Database,
      title: "Comprehensive patient dashboard",
      description: "Centralized view of patient history, medications, and care plans"
    }, {
      icon: BarChart,
      title: "Advanced analytics and reporting",
      description: "Real-time insights into practice performance and patient outcomes"
    }, {
      icon: Globe,
      title: "Multi-device accessibility",
      description: "Access from any device with secure cloud-based platform"
    }, {
      icon: Users,
      title: "Care team collaboration",
      description: "Seamless communication and coordination among healthcare providers"
    }, {
      icon: Lock,
      title: "Enterprise-grade security",
      description: "HIPAA-compliant with advanced encryption and access controls"
    }],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
  }, {
    id: 'appointment-scheduler',
    icon: Calendar,
    title: "Appointment Scheduler",
    subtitle: "AI-powered intelligent scheduling system",
    heroDescription: "AI-powered intelligent scheduling system with Natural Language Processing for appointment booking with calendar management and automated patient communication.",
    bgGradient: "from-purple-50 via-indigo-100 to-purple-100",
    features: [{
      icon: Brain,
      title: "Voice-powered scheduling",
      description: "Schedule appointments using natural language"
    }, {
      icon: Zap,
      title: "Natural language processing",
      description: "Understand and process complex scheduling requests"
    }, {
      icon: Clock,
      title: "Automated reminders",
      description: "Smart reminders via SMS, email, and phone calls"
    }, {
      icon: Database,
      title: "Calendar integration",
      description: "Sync with Google, Outlook, and other calendar systems"
    }, {
      icon: Users,
      title: "Multi-provider support",
      description: "Manage schedules for multiple healthcare providers"
    }, {
      icon: Award,
      title: "Real-time availability",
      description: "Live updates on provider availability and scheduling"
    }],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop"
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-[30px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">AI Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hikigai's suite of tools empowers clinicians and care teams to work smarter, not harder.
            </p>
          </div>
        </div>
      </section>

      {/* Products Sections */}
      {products.map((product, index) => <section key={product.id} className={`py-20 bg-gradient-to-br ${product.bgGradient}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Product Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Product Info */}
              <div>
                {/* Product Title and Subtitle */}
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-gray-900">{product.title}</h2>
                  
                </div>
                
                {/* Product Image */}
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-blue-200 rounded-3xl opacity-30 blur-lg"></div>
                  <img src={product.image} alt={product.title} className="relative w-full h-80 object-cover rounded-2xl shadow-xl" />
                </div>
                
                {/* Product Description */}
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {product.heroDescription}
                </p>
                
                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-semibold shadow-lg py-[8px]">
                    {index === 0 ? 'Try it Out' : 'Request Demo'}
                  </button>
                  <button className="border-2 border-purple-600 text-purple-600 px-8 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-200 font-semibold flex items-center bg-white/80 backdrop-blur-sm py-[8px]">
                    <Play className="mr-2" size={20} />
                    How it Works
                  </button>
                </div>
              </div>

              {/* Right Column - Features & Benefits */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Features & Benefits</h3>
                <div className="grid grid-cols-1 gap-6">
                  {product.features.map((feature, featureIndex) => <div key={featureIndex} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all duration-200 border border-white/50 hover:bg-white/90 px-[6px] py-[3px]">
                      <div className="flex items-start">
                        <div className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full w-fit mr-4 flex-shrink-0">
                          <feature.icon className="text-purple-600" size={24} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </section>)}
      
      <Footer />
    </div>;
};
export default AIProductsPage;