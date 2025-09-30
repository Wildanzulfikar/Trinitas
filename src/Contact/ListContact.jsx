import React from "react";
import { FaUserAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ListContact = () => {
  return (
    <div className="px-5 md:px-5">
      <section id="kontak" className="bg-white py-12 px-4 border-t-2 border-t-gray-200 max-w-6xl  md:mx-auto md:px-16 shadow-md rounded-md">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">
          <span className="text-[#ED3500]">Kontak</span>{" "}
          <span className="text-black">Kami</span>
        </h2>
        <p className="mt-4 text-sm text-gray-600">
          Kami siap membantu kebutuhan Anda, <br />
          hubungi tim kami melalui kontak berikut.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 text-center">
        {/* Phone */}
        <div className="flex flex-col items-center text-gray-700">
          <FaUserAlt className="text-2xl mb-2" />
          <p>+62 8131 8130 037</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-gray-700">
          <FaEnvelope className="text-2xl mb-2" />
          <p>trinintas@gmail.com</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center text-gray-700">
          <FaMapMarkerAlt className="text-2xl mb-2" />
          <p className="text-sm">
            Kompleks industri kimia, Jl. pintu gerbang tol cibitung - gandasari
          </p>
        </div>
      </div>
      </section>
    </div>
  );
};

export default ListContact;
