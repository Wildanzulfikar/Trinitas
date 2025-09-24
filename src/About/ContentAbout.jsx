import client from "/public/client.png"

export default function ContentAbout() {
    return (
        <div className="flex flex-col gap-6 max-w-6xl mx-auto mt-10">
            <h1 className="font-bold text-2xl">Tentang <span className="text-[#ED3500]">Kami</span></h1>
            <Text text="Kami adalah perusahaan penyedia jasa sewa gudang profesional yang berkomitmen membantu bisnis dalam mengelola penyimpanan barang dengan lebih efisien, aman, dan terjangkau. Dengan pengalaman bertahun-tahun di bidang logistik, kami memahami betul pentingnya ruang penyimpanan yang strategis dan terorganisir."/>
            <Client/>
        </div>
    )
}

function Text({text}) {
    return (
        <div className="text-justify">
            <p>{text}</p>
        </div>
    )
}

function Client() {
    return (
        <div className="flex gap-6 items-center">
            <div className="flex w-28">
                <img className="border-white" src={client} alt="client-1"/>
            </div>
            <div className="flex text-2xl font-normal gap-1">
                <p>99+</p>
                <p>Client</p>
            </div>
        </div>
    )
}