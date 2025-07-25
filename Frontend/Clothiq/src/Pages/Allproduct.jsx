import axios from "axios"
import { useEffect, useState,useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Navigate, useNavigate } from "react-router-dom";


const Allproduct = () => {
  gsap.registerPlugin(ScrollTrigger);
  const Navigate = useNavigate()

   const itemsRef = useRef([]);


  useEffect(() => {
    itemsRef.current.forEach((section) => {
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

  

    


  const [products, setproducts] = useState([])
 

  useEffect(() => {
    axios.get("http://localhost:3000/product")
      .then((response) => {
          setproducts(response.data.productdata)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  

  const handleid=()=>{

    Navigate("/Buynow")
   

  }
  


  




  return (
    <>
    <section ref={(el) => (itemsRef.current[0] = el)}> 
      <div className="min-h-screen bg-gradient-to-r from-slate-100 via-white to-slate-100 p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Our Products
        </h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product,idx) => (
            <div 
              key={idx}
              onClick={()=>handleid(product._id)}
              className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition duration-300">
              
               
              <img
                src={product.image}
                className="w-full h-60 object-cover rounded-2xl"
              />
              <h2 className="mt-4 text-sm font-semibold text-gray-700">
                {product.title}
              </h2>
              <h2 className="mt-4 text-sm font-semibold text-gray-700">
                size:-M , L , XL , XXL 
              </h2>
              <p className="text-gray-500 text-center py-2">Price:-{product.price}/-</p>
              <button   className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
      </section>

       <section
         ref={(el) => (itemsRef.current[1] = el)}
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
            </section>



    </>

  )
}

export default Allproduct
