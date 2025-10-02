import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      title: "Contact Form Submission",
    };

    emailjs
      .send(
        "service_62cdnow",     
        "template_9tcm6d4",  
        templateParams,
        "e2pUoFtF5hwL8s49B"  
      )
      .then(
        (res) => {
          alert("✅ Email berhasil dikirim!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (err) => {
          alert("❌ Gagal mengirim email: " + err.text);
        }
      );
  };

  return (
    <div className="px-5 md:px-5">
      <div className="flex flex-col md:flex-row bg-white rounded shadow-md overflow-hidden max-w-6xl md:mx-auto mt-10">
        {/* Gambar */}
        <div className="md:w-1/2">
          <img
            src="daftar-gudang/A1.jpeg"
            alt="Warehouse"
            className="h-[480px] w-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="md:w-1/2 bg-gray-900 text-white p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-red-500">Hubungi</span> Kami
          </h2>
          <p className="text-sm mb-6">
            Anda dapat menghubungi kami kapan saja
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nama */}
            <div className="flex gap-2">
              <input
                type="text"
                name="firstName"
                placeholder="Firstname"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-1/2 px-3 py-2 rounded bg-white text-black focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="LastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-1/2 px-3 py-2 rounded bg-white text-black focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center bg-white rounded text-black">
              <Mail className="ml-2 text-gray-500" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center bg-white rounded text-black">
              <Phone className="ml-2 text-gray-500" size={18} />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded focus:outline-none"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-white text-black focus:outline-none"
              rows="4"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}