import client from "/client.png"

export default function ContentAbout() {
    return (
        <div className="flex flex-col gap-6 mx-auto mt-10">
            <h1 className="font-extrabold text-3xl">Tentang <span className="text-[#ED3500]">Kami</span></h1>
            <Text />
            <Client/>
        </div>
    )
}

function Text() {
    return (
        <div className="text-justify">
            <p className="mb-4">Kami adalah perusahaan penyedia jasa <strong> sewa gudang </ strong> profesional yang berkomitmen membantu bisnis dalam mengelola penyimpanan barang dengan lebih efisien, aman, dan terjangkau. Dengan pengalaman bertahun-tahun di bidang logistik, kami memahami betul pentingnya ruang penyimpanan yang strategis dan terorganisir.</p>
            <a href="#gudang" className="text-blue-600 hover:underline">Lihat Daftar Gudang</a>
        </div>
    )
}

function Client() {
    return (
        <div className="flex gap-6 items-center">
            <div className="flex w-28">
                <img className="border-white" src={client} alt="Jumlah klien sewa gudang"/>
            </div>
            <div className="flex text-2xl font-normal gap-1">
                <p>99+</p>
                <p>Client</p>
            </div>
        </div>
    )
}