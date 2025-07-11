import Header from '../components/Header';
import Hero from '../components/Hero';
import CTAForm from '../components/CTAForm';
import WhyChoose from '../components/WhyChoose';
import PlatformHighlights from '../components/PlatformHighlights';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { FileText, Brain, Zap, Shield, Database, Lock } from 'lucide-react';
const Index = () => {
  const platformFeatures = [{
    icon: FileText,
    title: "Streamlined Clinical Documentation",
    description: "Automate Clinical Documentation with AI-powered voice transcription & Clinical Notes generation that reduces administrative burden by 50% allowing doctors to focus more on patient care. Doctors just tap the record button and start the consultation. Our AI handles the rest.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
  }, {
    icon: Brain,
    title: "Advanced Clinical Decision Support",
    description: "Harness real-time AI driven insights from the patient's digital health twin to make accurate decisions, thereby improving diagnostic precision and personalized treatment.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
  }, {
    icon: Zap,
    title: "Enhanced ROI through AI driven Automation",
    description: "Automate Administrative tasks, reduce errors & eliminate front office cost with AI powered appointment schedular. Improve financial health through proactive claim validation, denial management, and streamlined payment reconciliation to maximize return on investment.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
  }, {
    icon: Shield,
    title: "Increased Patient Safety with Alerting",
    description: "Receive real-time alerts for potential medication interactions and adverse reactions to prevent medication errors and improve patient safety with personalized medication recommendations.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
  }, {
    icon: Database,
    title: "Comprehensive Data Integration & Interoperability",
    description: "Unify patient data from various sources like EHR, wearable devices, genomic databases and imaging platforms for personalized patient care through a consolidated interoperable platform.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
  }, {
    icon: Lock,
    title: "Robust Security and Privacy Compliance",
    description: "HIPAA compliant with highest standards of patient privacy and data security thereby safeguarding sensitive patient information while enabling personalized healthcare delivery.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop"
  }];
  return <div className="min-h-screen">
      <Header />
      <Hero />
      <CTAForm />
      <WhyChoose />
      
      {/* Platform Features & Benefits */}
      <section className="bg-white py-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200 group border border-gray-100 py-[10px] px-[10px]">
                <div className="relative mb-6">
                  <img src={feature.image} alt={feature.title} className="w-full h-40 object-cover rounded-lg" />
                  <div className="absolute -bottom-4 left-4 p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl group-hover:from-purple-200 group-hover:to-blue-200 transition-colors duration-200">
                    <feature.icon className="text-purple-600" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      <PlatformHighlights />
      <Testimonials />
      <Footer />
    </div>;
};
export default Index;