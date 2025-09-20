import Brand from "./Brand"
import NavigasiLeft from "./NavigasiLeft"
import NavigasiRight from "./NavigasiRight"

export default function Navbar() {
    return (
        <div className="flex ">
            <NavigasiLeft />
            <Brand />
            <NavigasiRight />
        </div>
    )
}