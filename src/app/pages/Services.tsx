import { Header } from "../components/Header";
import { Link } from "react-router";
import {
  Sparkles,
  Home,
  Trash2,
  Key,
  Building,
  CheckCircle,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Basic Clean",
      price: "$80",
      description: "Perfect for regular maintenance and upkeep",
      features: [
        "Dusting all surfaces",
        "Vacuum and mop floors",
        "Bathroom cleaning",
        "Kitchen cleaning",
        "Trash removal",
      ],
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Deep Clean",
      price: "$250+",
      description: "Comprehensive cleaning for a thorough refresh",
      features: [
        "Everything in Basic Clean",
        "Baseboards and trim",
        "Inside cabinets",
        "Window sills and tracks",
        "Light fixtures",
        "Behind appliances",
      ],
      popular: true,
    },
    {
      icon: <Key className="w-12 h-12" />,
      title: "Move In/Move Out",
      price: "$300+",
      description: "Complete cleaning for moving transitions",
      features: [
        "Deep cleaning of all rooms",
        "Inside all cabinets",
        "All appliances",
        "Walls and baseboards",
        "Windows (interior)",
        "Closets",
      ],
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Airbnb Cleaning",
      price: "$80+",
      description: "Quick turnaround for your rental property",
      features: [
        "Fast, efficient service",
        "Fresh linens",
        "Complete sanitation",
        "Restocking supplies",
        "Price based on property size",
      ],
    },
  ];

  const extras = [
    { name: "Laundry", price: "$30-50" },
    { name: "Stove Deep Clean", price: "$30-50" },
    { name: "Refrigerator Deep Clean", price: "$30-50" },
    { name: "Garage Sweep", price: "$30-50" },
    { name: "Interior Windows", price: "$30-50" },
    { name: "Oven Cleaning", price: "$30-50" },
    { name: "Patio/Balcony Cleaning", price: "$30-50" },
    { name: "Closet Organization", price: "$30-50" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-200 to-pink-300 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl mb-6 text-gray-500">Our Services</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Professional cleaning solutions tailored to your needs in the
            Dallas-Fort Worth area
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow relative ${
                  service.popular ? "border-4 border-pink-300" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-pink-300 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-pink-400 mb-4">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl text-pink-400 mb-2">
                  {service.title}
                </h3>
                <div className="text-3xl sm:text-4xl text-pink-400 mb-4">
                  {service.price}
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Trash2 className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl text-pink-400 mb-4">Add-On Services</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Customize your cleaning package with these additional services
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-5 sm:p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {extras.map((extra, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 flex justify-between items-center gap-4"
                >
                  <span className="text-gray-600">{extra.name}</span>
                  <span className="text-pink-400">{extra.price}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6 text-center">
              Pricing depends on the specific requirements and scope of work
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-pink-400 mb-4">We Service</h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Dallas, DFW, Grapevine, Grand Prairie, Arlington, Denton, and
              more!
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-12 text-center shadow-lg max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Not sure if we service your area?
            </p>
            <Link
              to="/schedule"
              className="inline-block bg-pink-300 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg hover:bg-pink-400 transition-colors shadow-lg"
            >
              Contact Us to Find Out →
            </Link>
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