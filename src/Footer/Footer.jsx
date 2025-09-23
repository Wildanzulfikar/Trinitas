// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {

    const background = {
        backgroundImage : "url('/background.png')"
    }

  return (
    <footer style={background} className="bg-white mt-16 text-gray-800 py-10 px-6 md:px-20">
      <div className="md:flex md:justify-between md:gap-20">
        {/* Bagian Logo & Sosial Media */}
        <div className="flex flex-col gap-10 md:w-1/3 mb-8 md:mb-0">
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
            className="flex items-center gap-2 bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 shadow hover:bg-gray-100 hover:scale-105 transition-transform duration-200"
            >
            <FaArrowUp className="text-blue-500" />
            Kembali ke atas
            </button>
        </div>

        {/* Navigasi */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h3 className="font-bold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-800 cursor-pointer">Home</li>
            <li className="hover:text-gray-800 cursor-pointer">Tentang kami</li>
            <li className="hover:text-gray-800 cursor-pointer">Fasilitas</li>
            <li className="hover:text-gray-800 cursor-pointer">Info gudang</li>
            <li className="hover:text-gray-800 cursor-pointer">Galeri</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="md:w-1/3">
          <h3 className="font-bold mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-800 cursor-pointer">Kebijakan Privasi</li>
            <li className="hover:text-gray-800 cursor-pointer">Syarat & Ketentuan</li>
            <li className="hover:text-gray-800 cursor-pointer">Contact / Support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
