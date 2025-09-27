import { useEffect } from "react"
import AppHome from "./Home/AppHome"
import HamburgerMenu from "./Component/HamburgerMenu"
import AppPrinsip from "./Prinsip/AppPrinsip"
import AppAbout from "./About/AppAbout"
import VisiMisi from "./Visi&Misi/VisiMisi"
import LogoSlider from "./Client/LogoSlider"
import AppFasilitas from "./Fasilitas/AppFasilitas"
import DaftarGudang from "./Gudang/DaftarGudang"
import WarehouseSlider from "./Slider/WarehouseSlider"
import FAQ from "./Faq/Faq"
import ContactSection from "./Contact/ContactSection"
import Footer from "./Footer/Footer"
import ListContact from "./Contact/ListContact"

export default function App() {

    useEffect(() => {
    
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            {/* <Navbar /> */}
            <HamburgerMenu />
            <AppHome />
            <AppPrinsip />
            <AppAbout />
            <VisiMisi />
            <LogoSlider />
            <AppFasilitas />
            <DaftarGudang />
            <WarehouseSlider />
            <FAQ/>
            <ListContact />
            <ContactSection />
            <Footer />
        </div>
    )
}