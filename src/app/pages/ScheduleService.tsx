import { Header } from "../components/Header";
import { Mail, Phone, MessageSquare, Clock, MapPin } from "lucide-react";
import { useEffect } from "react";

export default function ScheduleService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactMethods = [
    {
      icon: <Phone className="w-16 h-16" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "(903) 303-4896",
      action: "tel:9033034896",
      cta: "Call Now",
    },
    {
      icon: <Mail className="w-16 h-16" />,
      title: "Email Us",
      description: "Get a detailed quote via email",
      contact: "jellybean.poozy2017@gmail.com",
      action: "mailto:jellybean.poozy2017@gmail.com",
      cta: "Send Email",
    },
    {
      icon: <MessageSquare className="w-16 h-16" />,
      title: "Text Us",
      description: "Send us a quick message",
      contact: "(903) 303-4896",
      action: "sms:9033034896",
      cta: "Send Text",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-200 to-pink-300 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl mb-6 text-gray-500">Schedule Your Service</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to experience a cleaner, fresher home? Contact us today and
            let's get started!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-pink-400 mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Choose your preferred method to contact us. We'll respond quickly
              to discuss your cleaning needs and schedule a service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-pink-400 flex justify-center mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl sm:text-2xl text-pink-400 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-lg sm:text-xl text-gray-500 mb-6 break-all">{method.contact}</p>
                <a
                  href={method.action}
                  className="inline-block bg-pink-300 text-white px-6 py-3 rounded-lg hover:bg-pink-400 transition-colors w-full"
                >
                  {method.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-2xl p-6 sm:p-12 text-center">
            <Clock className="w-12 h-12 text-pink-400 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl text-pink-400 mb-6">Business Hours</h2>
            <div className="space-y-3 text-base sm:text-lg text-gray-600">
              <div className="flex flex-col sm:flex-row sm:justify-between max-w-md mx-auto gap-1 sm:gap-4">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between max-w-md mx-auto gap-1 sm:gap-4">
                <span>Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between max-w-md mx-auto gap-1 sm:gap-4">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Reminder */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl text-pink-400 mb-4">Service Areas</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            We proudly serve Dallas, DFW, Grapevine, Grand Prairie, Arlington,
            Denton, and surrounding areas.
          </p>
          <p className="text-gray-600">
            Not sure if we cover your area? Contact us to find out!
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-pink-400 mb-4">What to Expect</h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Here's what happens when you contact us
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-pink-300 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl text-pink-400 mb-2">Contact Us</h3>
              <p className="text-gray-600">
                Reach out via phone, text, or email
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-300 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl text-pink-400 mb-2">Consultation</h3>
              <p className="text-gray-600">
                We'll discuss your specific cleaning needs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-300 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl text-pink-400 mb-2">Get a Quote</h3>
              <p className="text-gray-600">Receive a detailed price estimate</p>
            </div>

            <div className="text-center">
              <div className="bg-pink-300 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl text-pink-400 mb-2">Schedule</h3>
              <p className="text-gray-600">
                Pick a time that works best for you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-pink-200 to-pink-300 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6 text-gray-500">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Contact us now and experience the Sparkle Clean difference!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9033034896"
              className="inline-block bg-white text-pink-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg hover:bg-pink-50 transition-colors shadow-lg"
            >
              Call Us (903) 303-4896
            </a>
            <a
              href="mailto:jellybean.poozy2017@gmail.com"
              className="inline-block bg-pink-300 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg hover:bg-pink-400 transition-colors shadow-lg"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            © 2026 Cleaning Service. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}