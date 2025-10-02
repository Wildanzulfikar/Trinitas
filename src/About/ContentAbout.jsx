import { motion } from "framer-motion";
import client from "/client.png";

export default function ContentAbout() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 mx-auto mt-10"
        >
            <h1 className="font-extrabold text-3xl">
                Tentang <span className="text-[#ED3500]">Kami</span>
            </h1>
            <Text />
            <Client />
        </motion.div>
    );
}

function Text() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-justify"
        >
            <p className="mb-4">
                Kami adalah perusahaan penyedia jasa <strong>sewa gudang</strong> profesional yang berkomitmen membantu bisnis dalam mengelola penyimpanan barang dengan lebih efisien, aman, dan terjangkau. Dengan pengalaman bertahun-tahun di bidang logistik, kami memahami betul pentingnya ruang penyimpanan yang strategis dan terorganisir.
            </p>
            <a href="#gudang" className="text-blue-600 hover:underline">Lihat Daftar Gudang</a>
        </motion.div>
    );
}

function Client() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-6 items-center"
        >
            <div className="flex w-28">
                <img className="border-white" src={client} alt="Jumlah klien sewa gudang" />
            </div>
            <div className="flex text-2xl font-normal gap-1">
                <p>99+</p>
                <p>Client</p>
            </div>
        </motion.div>
    );
}
