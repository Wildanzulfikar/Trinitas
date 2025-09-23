import FasilitasList from "./FasilitasList"
import { getData } from "./Fasilitas"

export default function AppFasilitas() {

    const fasilitases = getData()

    const backgroundImage = {
        backgroundImage: "url('/background.png')"
    }

    return (
        <div className="px-10 pt-20 pb-20" style={backgroundImage}>
            <div>
                <h1 className="mb-10 font-bold text-2xl"><span className="text-[#ED3500]">Fasilitas</span> yang tersedia</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2" >
                {
                    fasilitases.map((fasilitas) => (
                        <FasilitasList key={fasilitas.id} {...fasilitas}/>
                    ))
                }
            </div>
        </div>
    )
}