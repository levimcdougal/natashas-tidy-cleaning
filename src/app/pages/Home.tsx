import { Header } from "../components/Header";
import { Gallery } from "../components/Gallery";
import { Link } from "react-router";
import { MapPin, Shield, Star } from "lucide-react";
import heroImage from "../../assets/f459d3a83fd88c98fd02386c2e15be5f8e93bf44.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-200 to-pink-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-block bg-pink-100 rounded-full px-4 py-2 mb-4">
                <span className="text-sm text-gray-600">Cleaning is what I do, and I do it well.</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-gray-500">
                Trusted Every Time,
                <br />
                <span className="text-white">Shine Faster!</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-gray-600">
                Stop wasting your precious free time cleaning, relax while we
                make your home sparkle!
              </p>
              <Link
                to="/schedule"
                className="inline-block bg-white text-pink-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg hover:bg-pink-50 transition-colors shadow-lg"
              >
                Schedule Service Now →
              </Link>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Professional cleaning service"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Trust Section - Insurance & References */}
      <section className="py-12 sm:py-16 bg-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-pink-400 mb-4">Your Trust, Our Priority</h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Professional service you can count on
            </p>
          </div>

          {/* Insurance */}
          <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow mb-12 max-w-2xl mx-auto">
            <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-pink-400" />
            </div>
            <h3 className="text-2xl text-gray-500 mb-3">Fully Insured</h3>
            <p className="text-gray-600">
              Your home and belongings are protected with comprehensive insurance coverage for complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl text-pink-400 mb-4">Service Areas</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              We proudly serve the Dallas-Fort Worth metroplex and surrounding
              areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Dallas",
              "Fort Worth",
              "Grapevine",
              "Denton",
              "Grand Prairie",
              "Arlington",
            ].map((city) => (
              <div
                key={city}
                className="bg-pink-50 rounded-lg p-4 sm:p-6 text-center hover:bg-pink-100 transition-colors"
              >
                <span className="text-base sm:text-lg text-pink-400">{city}</span>
              </div>
            ))}
            <div className="md:col-start-2 bg-pink-50 rounded-lg p-4 sm:p-6 text-center hover:bg-pink-100 transition-colors">
              <span className="text-base sm:text-lg text-pink-400">And More!</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-pink-200 to-pink-300 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6 text-gray-500">Ready for a Spotless Home?</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Contact us today and experience the difference professional cleaning
            makes
          </p>
          <Link
            to="/schedule"
            className="inline-block bg-white text-pink-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg hover:bg-pink-50 transition-colors shadow-lg"
          >
            Schedule Service Now →
          </Link>
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