export default function LeftHome() {
    return (
        <div>
            <Header />
            <SubHeader />
            <CallToAction />
        </div>
    )
}


function Header() {
    return (
        <h1>Solusi Sewa Gudang yang Aman & Terpercaya</h1>
    )
}

function SubHeader() {
    return (
        <p>Kami menyediakan gudang dengan lokasi strategis, harga kompetitif, dan keamanan 24 jam.</p>
    )
}

function CallToAction() {
    return (
        <div>
            <a href="">Hubungi Kami</a>
            <a href="">Pelajari Selengkapnya</a>
        </div>
    )
}