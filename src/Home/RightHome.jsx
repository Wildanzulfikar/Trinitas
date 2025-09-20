import image1 from "/public/suasana-gudang/(1).jpeg"
import image2 from "/public/suasana-gudang/(2).jpeg"

export default function RightHome() {
    return (
        <div>
            <img src={image1} alt="image1" />
            <img src={image2} alt="image2" />
        </div>
    )
}