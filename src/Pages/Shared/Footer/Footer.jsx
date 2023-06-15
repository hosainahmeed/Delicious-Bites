import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaTwitter,FaViber,FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-24">
      <div className="bg-[#032E3F] text-white">
        <div className="max-w-screen-xl mx-auto lg:flex justify-between p-10 lg:py-20 ">
          <div>
            <h2 className="text-2xl">About Us</h2>
            <hr />
            <div className="mt-4">
              <h4 className="text-2xl my-4 flex gap-2 items-center"><FaGraduationCap className="text-3xl"/>RainbowFeast</h4>
              <p>
                {" "}
                Indulge in a kaleidoscope of flavors at RainbowFeast, where <br /> culinary artistry meets vibrant dining experiences
              </p>
            </div>
            <div className="flex gap-3 text-2xl my-4">
              <FaFacebook  className="cursor-pointer"></FaFacebook>
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
          <div>
            <h2 className="text-2xl">Our Links</h2>
            <hr />
            <div className="text-xl mt-4 lg:space-y-4 space-y-2">
              <p>
                {" "}
                <Link to='/'>Home</Link>
              </p>
              <p>
                <Link to='/menu'>Menu</Link>
              </p>
              <p className="mb-4">
                <Link to='/orderFood/salad'>Order</Link>
              </p>
            </div>
          </div>
          <div className="my-6 lg:my-0">
            <h2 className="text-2xl ">LEGAL</h2>
            <hr />
            <div className="space-y-3 text-xl mt-4">
            <p><Link>Terms of use</Link></p>
            <p><Link>Privacy policy</Link></p>
            <p><Link>Cookie policy</Link></p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl">Contact Us</h2>
            <hr />
            <div className="text-xl my-6 space-y-2">
                <div className="flex items-center gap-2">
                    <FaViber/>
                    <p>+88 017548765614</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt/>
                    <p>Dhaka , Bangladesh</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaViber/>
                    <p>+88 017548765614</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FF7350]">
       <div className="max-w-screen-xl mx-auto flex justify-between text-white p-4 lg:p-6">
       <h1 className="text-2xl font-bold hidden lg:flex items-center gap-2"><FaGraduationCap className="text-4xl"/> RainbowFeast</h1>
        <p className="lg:text-xl font-semibold">Copyright © Qeducato 2023 . All rights reserved.</p>
       </div>
      </div>
    </div>
  );
};

export default Footer;
