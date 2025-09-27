// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {

    const background = {
        backgroundImage : "url('/background.png')",
        backgroundSize: "cover",       
        backgroundPosition: "center",
    }

  return (
    <footer style={background} className="mt-16 text-gray-800 px-5 md:px-5">
      <div className="md:flex py-10 justify-between md:gap-20 max-w-6xl md:mx-auto">
        <div className="flex flex-col md:w-1/3 gap-10 mb-20 md:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <img src="/logo-trinitas.png" alt="TrinitasPrima" className="w-10 h-10"/>
            <div>
                <span className="font-extrabold text-2xl text-blue-600">Trinitas<span className="text-red-500">Prima</span></span>
                <p className="text-[8px] text-gray-600">Your Integrated Warehouse Solution</p>
            </div>
          </div>
          <p className="text-gray-600 mb-4 text-[14px]">
            Solusi komprehensif pergudangan dan logistik dengan fokus pada efisiensi, inovasi, serta kepuasan pelanggan.
          </p>
          <div className="flex gap-6 mb-4">
            <FaTiktok size={20} className="cursor-pointer"/>
            <FaTwitter size={20} className="cursor-pointer"/>
            <FaInstagram size={20} className="cursor-pointer"/>
            <FaFacebookF size={20} className="cursor-pointer"/>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center w-48 gap-2 bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 shadow hover:bg-gray-100 hover:scale-105 transition-transform duration-200"
            >
            <FaArrowUp className="text-blue-500" />
            Kembali ke atas
            </button>
        </div>

        {/* Navigasi */}
        <div className="mb-20 md:mb-0">
          <h3 className="font-bold mb-8">Navigasi</h3>
          <ul className="space-y-4 text-gray-600">
            <li className="hover:text-gray-800 cursor-pointer">Home</li>
            <li className="hover:text-gray-800 cursor-pointer">Tentang kami</li>
            <li className="hover:text-gray-800 cursor-pointer">Fasilitas</li>
            <li className="hover:text-gray-800 cursor-pointer">Info gudang</li>
            <li className="hover:text-gray-800 cursor-pointer">Galeri</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="">
          <h3 className="font-bold mb-8">Legal</h3>
          <ul className="space-y-4 text-gray-600">
            <li className="hover:text-gray-800 cursor-pointer">Kebijakan Privasi</li>
            <li className="hover:text-gray-800 cursor-pointer">Syarat & Ketentuan</li>
            <li className="hover:text-gray-800 cursor-pointer">Contact / Support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
