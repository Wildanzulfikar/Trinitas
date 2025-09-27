import { getData } from "./Home"
import HomeList from "./HomeList"

export default function AppHome() {

    const datas = getData()

    const backgroundHome = {
        backgroundImage : "url('/background.png')",
        backgroundSize: "cover",       
        backgroundPosition: "center",
        minHeight: "100vh"
    }

    return (
        <div style={backgroundHome} id="home">
            {
                datas.map((data) => (
                    <HomeList  key={data.id} {...data}/>
                ))
            }
        </div>
    )
}