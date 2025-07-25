import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';


gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-slate-100 to-white"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
          About Clothiq
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl">
          Stylish. Comfortable. Confident. We create fashion that fits your lifestyle.
        </p>
      </section>

  
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="py-20 px-6 bg-gray-50"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed">
            Clothiq was born out of a passion for modern, minimal streetwear. Our mission is
            to blend fashion and function into affordable everyday wear that inspires self-expression.
          </p>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To empower individuals through expressive clothing while maintaining sustainability
            and quality in every piece we create.
          </p>
        </div>
      </section>

    

          <section
        ref={(el) => (sectionsRef.current[3] = el)}

          className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p>We use only the finest materials that last and feel good.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>Always pushing trends while keeping it classic.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p>We believe in responsible fashion with purpose.</p>
            </div>
          </div>
        </div>
      </section>

         <footer
          ref={(el) => (sectionsRef.current[4] = el)}
         className="bg-white border-t border-gray-200 py-12">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Clothiq</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Premium menswear for the modern gentleman. Quality, style, and sophistication in every piece.
                    </p>
                  </div>
      
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Shop</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><a href="#" className="cursor-pointer hover:text-gray-900 transition-colors duration-300">New Arrivals</a></li>
                      <li><a href="#" className="cursor-pointer hover:text-gray-900 transition-colors duration-300">Best Sellers</a></li>
                      <li><a href="#" className="cursor-pointer hover:text-gray-900 transition-colors duration-300">Sale</a></li>
                      <li><a href="#" className="cursor-pointer hover:text-gray-900 transition-colors duration-300">Gift Cards</a></li>
                    </ul>
                  </div>
      
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><a href="#" className="cursor-pointer hover:text-gray-900 transition-colors duration-300">Size Guide</a></li>
                      <li><a href="#" className="cursor-pointer hover:text-gray-900 transition-colors duration-300">Shipping Info</a></li>
                      <li><a href="#" className="cursor-pointer hover:text-gray-900 transition-colors duration-300">Returns</a></li>
                      <li><a href="#" className="cursor-pointer hover:text-gray-900 transition-colors duration-300">Contact Us</a></li>
                    </ul>
                  </div>
      
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-300">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                      </a>
                      <a href="#" className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-300">
                        <FontAwesomeIcon icon={faXTwitter} size="lg" />
                      </a>
                      <a href="#" className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-300">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                      </a>
                      <a href="#" className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors duration-300">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                      </a>
                    </div>
                  </div>
                </div>
      
                <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
                  <p>&copy; 2025 Clothiq. All rights reserved.</p>
                </div>
              </div>
            </footer>
    

      
        
     

     
    </div>
  );
};

export default AboutPage;
