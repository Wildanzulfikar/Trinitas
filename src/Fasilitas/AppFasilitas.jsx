import FasilitasList from "./FasilitasList"
import { getData } from "./Fasilitas"

export default function AppFasilitas() {

    const fasilitases = getData()

    const backgroundImage = {
        backgroundImage: "url('/background.png')"
    }

    return (
        <div id="fasilitas" className="py-20 px-5 bg-center bg-cover" style={backgroundImage}>
            <div className="max-w-6xl mx-auto">
                <div>
                    <h1 className="mb-10 font-extrabold text-3xl"><span className="text-[#ED3500]">Fasilitas</span> yang tersedia</h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2" >
                    {
                        fasilitases.map((fasilitas) => (
                            <FasilitasList key={fasilitas.id} {...fasilitas}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}