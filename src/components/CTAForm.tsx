import { useState } from 'react';
import { Mail, Phone, Building, User, CheckCircle, Quote, Star } from 'lucide-react';
const CTAForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });
  const testimonials = [{
    content: "I am a firm believer in Artificial Intelligence in health care. Hikigai Platform is completely reshaping my workflow, making it easy for me to embrace a digital approach to healthcare in this semi-rural town",
    author: "Dr. Mahendran",
    location: "Coimbatore, India",
    rating: 5
  }, {
    content: "We have been using human scribes for documenting the patient encounters. Using AI for automating documentation is a game changer. Not only it offers high ROI, it also reduces human errors which is critical in patient care and, also, in claims processing",
    author: "Dr. Nair",
    location: "Michigan, USA",
    rating: 5
  }];
  const renderStars = (rating: number) => {
    return <div className="flex items-center">
        {[...Array(5)].map((_, index) => <Star key={index} size={14} className={index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />)}
      </div>;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-[40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Full Name *
                    </label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors" placeholder="Enter your full name" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email Address *
                    </label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors" placeholder="Enter your phone" />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      <Building className="inline w-4 h-4 mr-2" />
                      Organization
                    </label>
                    <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors" placeholder="Enter organization" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors" placeholder="Tell us about your needs..."></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-semibold shadow-lg">
                  Get Started Today
                </button>
                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Transform Your <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Healthcare Practice?</span>
              </h2>
              <p className="text-xl text-gray-600 font-normal">Get started with Hikigai AI to experience the future of Healthcare documentation and reduce clinician load from day one.</p>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => {})}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTAForm;