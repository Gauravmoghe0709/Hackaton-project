import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from "axios";


gsap.registerPlugin(ScrollTrigger);
const Looks = () => {
    const sectionRefs = useRef([]);

    useEffect(() => {
        sectionRefs.current.forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    const [looks, setlooks] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/lookbook")
            .then((Response) => {
                setlooks(Response.data.looksbookdata)
            }).catch((error) => {
                console.log(error)
            })


    }, [])


    return (
        <>
            <div className="bg-white text-gray-800">

                <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-gray-100 to-white">
                    <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                        Clothiq Lookbook
                    </h1>
                    <p className="text-lg text-gray-600 max-w-xl">
                        Discover curated outfits and seasonal inspiration for your next wardrobe refresh.
                    </p>
                </section>


                <section className="px-6 py-20">
                    <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                        {looks.map((items) => (
                            <div
                                key={items._id}
                                ref={(el) => (sectionRefs.current[0] = el)}
                                className="overflow-hidden rounded-xl shadow-lg bg-white"
                            >
                                <img
                                    src={items.image}

                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                <footer
                    ref={(el) => (sectionRefs.current[4] = el)}
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


        </>
    )
}

export default Looks