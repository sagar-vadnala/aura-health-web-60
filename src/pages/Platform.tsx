import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Zap, Database, Cloud, Code, Users, CheckCircle, Lock, Award, Globe, Brain, Settings, UserCheck, AlertTriangle, EyeOff, Mic, FileText, BarChart, Stethoscope, Calendar, Heart, FlaskConical, CreditCard, Smartphone, Activity } from 'lucide-react';
const Platform = () => {
  const fourPillars = [{
    icon: Settings,
    title: "Open Extensible Platform",
    description: "Hikigai Platform integrates with all major EHRs and connects seamlessly to additional data sources like wearables, mobile health platforms, medical imaging systems, genomic databases, and more. This unified approach ensures data aggregation by combining diverse datasets into one cohesive platform. This helps healthcare providers with deeper insights and personalized care recommendations with a complete, real-time 360° view of each patient's health journey to drive better health outcomes.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
  }, {
    icon: UserCheck,
    title: "Personalization",
    description: "The Hikigai Platform leverages an advanced Knowledge Graph that creates a holistic view of each patient's health by integrating data from multiple sources. This empowers healthcare providers with patient-driven insights, facilitating personalized and precise care delivery. By intelligently linking multiple information streams, the AI engine identifies patterns and relationships, to help clinicians make well-informed decisions tailored to each patient's unique health journey.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
  }, {
    icon: AlertTriangle,
    title: "Bias Prevention",
    description: "The Hikigai Platform embeds rigorous, context-aware guardrails to identify & mitigate bias, ensuring equitable healthcare delivery across diverse populations. By embedding fairness into our AI-driven insights, Hikigai promotes personalized care that respects differences in race, gender, nationality, and socioeconomic background. Our commitment to equity ensures every patient benefits from unbiased, accurate recommendations, fostering trust and enhancing care outcomes. This is Hikigai's guarantee built into the platform.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
  }, {
    icon: EyeOff,
    title: "Privacy Centric",
    description: "The Platform puts patient privacy at the forefront, giving individuals complete control over their health data. Our privacy-first approach ensures that sensitive patient information remains protected at all times, with stringent safeguards preventing unauthorized AI-driven misuse. Our AI Engine is architected to protect patient privacy by prioritizing transparency and robust data governance. Hikigai maintains patient trust while still enabling powerful, personalized insights to enhance care delivery and this is a core differentiator of our platform.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
  }];
  const aiFeatures = [{
    icon: Mic,
    title: "AI Voice Appointment Scheduler",
    description: "Intelligent voice-powered scheduling system that handles patient appointments with natural language processing. Reduces administrative overhead while improving patient satisfaction through 24/7 availability and instant confirmation of appointments.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop"
  }, {
    icon: Brain,
    title: "Patient Prep Insights",
    description: "AI-driven patient preparation recommendations and pre-visit optimization for better outcomes. Analyzes patient history, current medications, and upcoming procedures to provide personalized preparation instructions and risk assessments.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
  }, {
    icon: FileText,
    title: "AI Scribe for EHR Automation",
    description: "Automated clinical documentation that integrates seamlessly with your existing EHR systems. Converts natural conversation into structured medical records with 98% accuracy, reducing documentation time by up to 75% while maintaining clinical quality.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&h=250&fit=crop"
  }, {
    icon: Calendar,
    title: "Automated Claims Processing with AI",
    description: "Streamlined insurance claims processing with AI-powered accuracy and fraud detection. Automatically generates and submits claims with proper coding, reducing denials and accelerating reimbursement cycles for healthcare providers.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop"
  }, {
    icon: BarChart,
    title: "Patient Intelligence and Analytics",
    description: "Comprehensive patient insights and predictive analytics for personalized care delivery. Leverages machine learning to identify at-risk patients, predict health outcomes, and recommend preventive interventions for improved population health management.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
  }, {
    icon: Stethoscope,
    title: "Medical Research Copilot for Doctors",
    description: "AI-powered research assistant that helps physicians stay updated with latest medical literature. Provides evidence-based recommendations, drug interaction alerts, and treatment protocol suggestions based on current best practices and clinical guidelines.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
  }];
  const ecosystemIntegrations = [{
    icon: Heart,
    title: "Apple Health",
    description: "Seamless integration with Apple Health ecosystem for comprehensive patient data"
  }, {
    icon: Activity,
    title: "Google Health",
    description: "Direct connection to Google Health platform for unified health records"
  }, {
    icon: FlaskConical,
    title: "Medication Ordering",
    description: "Automated medication ordering and prescription management systems"
  }, {
    icon: Stethoscope,
    title: "Lab Test Ordering",
    description: "Integrated lab test ordering and results management platform"
  }, {
    icon: CreditCard,
    title: "Claims Processing",
    description: "Streamlined insurance claims processing and reimbursement systems"
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-[20px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              The <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Hikigai Platform</span>
            </h1>
            <div className="max-w-5xl mx-auto space-y-6">
              <p className="leading-relaxed text-xl text-gray-600">Built by combining Large Action Models (LAMs), structured Knowledge Graphs, and an advanced Agentic Framework to deliver healthcare insights that you can trust.</p>
              <p className="leading-relaxed text-xl text-gray-600"> Hikigai Platform maps structured medical knowledge with patient data through these knowledge graphs to deliver an authorative source of truth by enhancing the precision and relevance of recommendations. The Platform leverages our proprietary algorithms and is built upon the synergy of Generative AI & Knowledge Graph technology that works within the agentic framework to drive automation & decision making at every stage of patient care.</p>
              <p className="leading-relaxed text-xl text-gray-600">Healthcare isn't about guesswork or probabilities, it demands accuracy. Doctors & patients require precision and trustworthy insights. We acknowledge that statistical nature of transformer models introduces a risk of inaccuracies, which is why we've added multi-level guardrails & validation protocols to mitigate the risk of AI hallucinations by using Knowledge Graphs for both, contextual personalization and rigorous validation. This ensures our platform delivers reliable & evidence backed insights, enabling healthcare providers to confidently make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="bg-gray-50 py-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[8px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">4 Pillars of Hikigai Platform</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourPillars.map((pillar, index) => <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 py-[12px] px-[12px]">
                <div className="relative mb-4">
                  <img src={pillar.image} alt={pillar.title} className="w-full h-32 object-cover rounded-lg" />
                  <div className="absolute -bottom-2 left-3 p-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
                    <pillar.icon className="text-purple-600" size={20} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center text-sm">{pillar.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="bg-white py-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Security & Compliance</h2>
              <p className="text-xl text-gray-600 mb-8">Your data security & patient privacy are our top priorities. We maintain the highest standards of security & compliance in the healthcare industry.</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-lg text-gray-700">HIPAA Compliant Infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-lg text-gray-700">End-to-End Encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-lg text-gray-700">Regular Security Checks</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 text-center">
              <div className="p-6 bg-white rounded-full w-fit mx-auto mb-6">
                <Lock className="text-purple-600" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">HIPAA Compliant Security</h3>
              <p className="text-gray-600">Enterprise grade encryption & multi-layered security protocols protect your sensitive healthcare data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-gray-50 py-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Healthcare Integrations</h2>
          </div>
          
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900">Supported EHR Systems</h3>
            <p className="text-lg text-gray-600 mt-2">Integrate with leading EHR platforms for unified patient data management</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {[{
            name: 'Epic EHR',
            logo: '🏥'
          }, {
            name: 'Oracle Cerner',
            logo: '⚕️'
          }, {
            name: 'Athena Health',
            logo: '🔬'
          }, {
            name: 'eClinicalWorks',
            logo: '💊'
          }, {
            name: 'Hikigai SmartPAM',
            logo: '🧬'
          }].map((integration, index) => <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200 border border-gray-100 py-[12px]">
                <div className="text-3xl mb-3">{integration.logo}</div>
                
                <span className="text-sm font-medium text-gray-700">{integration.name}</span>
              </div>)}
          </div>

          {/* Ecosystem Integrations */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ecosystem Integrations</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {ecosystemIntegrations.map((integration, index) => <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200 border border-gray-100 px-[2px] py-[6px]">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full w-fit mx-auto mb-4">
                  <integration.icon className="text-purple-600" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{integration.title}</h4>
                
              </div>)}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Features</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group border border-gray-100">
                <div className="relative mb-6">
                  <img src={feature.image} alt={feature.title} className="w-full h-40 object-cover rounded-lg" />
                  <div className="absolute -bottom-4 left-4 p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl group-hover:from-purple-200 group-hover:to-blue-200 transition-colors duration-200">
                    <feature.icon className="text-purple-600" size={24} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Platform;