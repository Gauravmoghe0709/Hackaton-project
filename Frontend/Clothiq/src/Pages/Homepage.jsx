
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify"

gsap.registerPlugin(ScrollTrigger);


const Homepage = () => {
  const homeRef = useRef([]);
  

  useEffect(() => {
    homeRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
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

  const navigate = useNavigate()

  const handleproduct = () => {
    navigate("/product")
  }
  const handlelooks = ()=>{
    navigate("/Looks")
  }
  const handlesubscribe = () => {
    toast.success("subscribe....")
  }
  




  const cards = [

    {
      id: 1,
      title: "Relaxed Fit Pullover DarkBlue",
      des: "Stay cozy and stylish in this ultra-soft pullover",
      img: "../images/RelaxedFitPullover_DarkBlue_01.jpg"
    },
    {
      id: 2,
      title: "Heavyweight Tshirt yellow",
      des: "Designed to move with you, from couch to city streets",
      img: "../images/HeavyweightTshirt_Yellow_02.jpg"
    },
    {
      id: 3,
      title: "Classic Sweatpant White",
      des: "Relax in style with our ultra-soft, tapered sweatpants.",
      img: "../images/ClassicSweatpant_White_02.jpg"
    },
    {
      id: 4,
      title: "Classic Crewneck Orange",
      des: "A must-have in your casual or athleisure wardrobe.",
      img: "../images/ClassicCrewneck_Orange_01.jpg"
    }
  ]


  return (
    <>

      <section
          ref={(el) => (homeRef.current[0] = el)}
      className="relative h-screen flex items-center justify-start bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Elevate Your
              <span className="block text-gray-700">Style</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our premium collection of contemporary menswear designed for the modern gentleman who values quality and sophistication.
            </p>
            <div className=" flex flex-col gap-4 md:flex md:flex-row">
              <button className="!rounded-button whitespace-nowrap cursor-pointer bg-gray-900 text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors duration-300" onClick={handleproduct}>
                Shop Collection
              </button>
              <button onClick={handlelooks} className="!rounded-button whitespace-nowrap cursor-pointer border-2 border-gray-900 text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300">
                View Lookbook
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
           ref={(el) => (homeRef.current[1] = el)}
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-violet-500 py-8">
            Shop by Categories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 ">
            {cards.map((items) => (
              <div
                key={items.id}
                className="rounded-xl p-6 text-center shadow-md bg-gradient-to-br hover:scale-105 hover:bg-gray-700 transform transition">
                <img src={items.img} />
                <h3 className="text-xl font-semibold">{items.title}</h3>
                <p className="text-gray-500 py-5">{items.des}</p>
              </div>


            ))}
          </div>
          <button className="float-right mt-5 font-mono border-1 w-30 rounded-2xl border-gray-400 hover:border-gray-500 hover:scale-105 transform transition" onClick={handleproduct}>View All </button>

        </div>
      </section>

      <section
           ref={(el) => (homeRef.current[2] = el)}
      className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of style, comfort, and quality craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 transition-colors duration-300">
                <i className="fas fa-award text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Crafted from the finest materials with attention to every detail
              </p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 transition-colors duration-300">
                <i className="fas fa-shipping-fast text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Free shipping on orders over 1000/- with express delivery options
              </p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 transition-colors duration-300">
                <i className="fas fa-undo text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600">
                30-day hassle-free returns and exchanges for your peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
         ref={(el) => (homeRef.current[3] = el)}
      className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Latest Trends
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Subscribe to our newsletter and be the first to know about new arrivals and exclusive offers
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            
              <input
                type='email'
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-1 text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              />

          
            <button onClick={handlesubscribe} className="!rounded-button whitespace-nowrap cursor-pointer bg-white text-gray-900 px-6 py-3 font-medium hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer
           ref={(el) => (homeRef.current[4] = el)}
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




    </>
  )
}

export default Homepage





