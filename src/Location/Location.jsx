export default function Location() {
  return (
    <div className="flex flex-col items-center text-center p-6">
      {/* Judul */}
      <h1 className="text-3xl font-extrabold mb-2">
        <span className="text-red-600">Lokasi</span> Kami
      </h1>

      {/* Alamat */}
      <p className="text-gray-700 max-w-2xl mb-6">
        Jl. Arteri Jl. Pintu Gerbang Tol Cibitung, Gandasari, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17530
      </p>

      {/* Google Maps Embed */}
      <div className="w-full max-w-6xl h-80 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Lokasi Kami"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126897.10663368921!2d106.80400753485232!3d-6.324691709667879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f60ad44e7ef%3A0xc15c2587b499a865!2sPT.%20Trinitas%20Prima%20Sejahtera%20(%20KIMU)!5e0!3m2!1sid!2sid!4v1759435588021!5m2!1sid!2sid"
          height="100%"
          width="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
