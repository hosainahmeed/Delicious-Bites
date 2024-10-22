import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-24">
      <div className="bg-[#2C3E50] text-white">
        <div className="max-w-screen-2xl mx-auto lg:flex gap-12 items-center justify-between p-10 lg:py-16 ">
          
          {/* Restaurant Info Section */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold">Our Restaurant</h2>
            <hr className="border-[#E74C3C] w-16 my-2" />
            <p className="text-gray-300 mt-4">
              Welcome to **Delicious Bites**, where each meal is a celebration of flavors! Enjoy a gourmet experience in a cozy atmosphere.
            </p>
            <div className="flex gap-4 text-3xl my-6">
              <FaFacebook className="cursor-pointer hover:text-[#E74C3C]" />
              <FaInstagram className="cursor-pointer hover:text-[#E74C3C]" />
              <FaTwitter className="cursor-pointer hover:text-[#E74C3C]" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold">Quick Links</h2>
            <hr className="border-[#E74C3C] w-16 my-2" />
            <div className="text-lg mt-4 space-y-3">
              <p>
                <Link to="/" className="hover:text-[#E74C3C]">Home</Link>
              </p>
              <p>
                <Link to="/menu" className="hover:text-[#E74C3C]">Menu</Link>
              </p>
              <p>
                <Link to="/reservation" className="hover:text-[#E74C3C]">Reservations</Link>
              </p>
              <p>
                <Link to="/contact" className="hover:text-[#E74C3C]">Contact Us</Link>
              </p>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold">Opening Hours</h2>
            <hr className="border-[#E74C3C] w-16 my-2" />
            <div className="text-lg mt-4 space-y-2">
              <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
              <p>Public Holidays: Closed</p>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <hr className="border-[#E74C3C] w-16 my-2" />
            <div className="text-lg mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <p>+88 01795******* </p>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <p>123 Food Street, Dhaka, Bangladesh</p>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <p>contact@deliciousbites.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#060606]">
        <div className="max-w-screen-xl mx-auto flex justify-between text-white p-4 lg:p-6">
          <h1 className="text-2xl font-bold hidden lg:flex items-center gap-2">
            Delicious Bites
          </h1>
          <p className="lg:text-lg font-semibold">© 2024 Delicious Bites. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

