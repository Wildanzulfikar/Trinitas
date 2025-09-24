import React from "react";
import { FaUserAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ListContact = () => {
  return (
    <section className="bg-white py-12 px-4 border-t-2 border-t-gray-200 max-w-4xl mx-6  md:mx-auto md:px-16 shadow-md rounded-md">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          <span className="text-orange-600">Kontak</span>{" "}
          <span className="text-black">Kami</span>
        </h2>
        <p className="mt-4 text-sm text-gray-600">
          Kami siap membantu kebutuhan Anda, <br />
          hubungi tim kami melalui kontak berikut.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center">
        {/* Phone */}
        <div className="flex flex-col items-center text-gray-700">
          <FaUserAlt className="text-2xl mb-2" />
          <p>+62 8xxxxxxxxxx</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-gray-700">
          <FaEnvelope className="text-2xl mb-2" />
          <p>trinintas@gmail.com</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center text-gray-700 max-w-xs">
          <FaMapMarkerAlt className="text-2xl mb-2" />
          <p className="text-sm">
            Kompleks industri kimia, Jl. pintu gerbang tol cibitung - gandasari
          </p>
        </div>
      </div>
    </section>
  );
};

export default ListContact;
