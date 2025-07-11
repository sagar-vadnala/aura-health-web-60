
import { Shield, Clock, Users, Award } from 'lucide-react';
const WhyChoose = () => {
  const features = [{
    icon: Clock,
    title: "Reduce documentation time by up to 50%",
    description: "Streamline your workflow with AI-powered automation"
  }, {
    icon: Shield,
    title: "HIPAA-compliant with secure infrastructure",
    description: "Enterprise-grade security for patient data protection"
  }, {
    icon: Users,
    title: "Seamless integrations with external EHRs",
    description: "Connect with your existing healthcare systems"
  }, {
    icon: Award,
    title: "Real-time Clinical Decision support",
    description: "Get instant insights to improve patient care"
  }];
  return <section className="bg-gray-50 py-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Hikigai?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Transform your healthcare practice with AI solutions designed for modern healthcare.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 text-center py-[6px] px-[6px]">
              <div className="p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl w-fit mx-auto mb-4">
                <feature.icon className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              
            </div>)}
        </div>
      </div>
    </section>;
};
export default WhyChoose;
