// HomeList.jsx
import LeftHome from "./LeftHome"
import RightHome from "./RightHome"

export default function HomeList({ subHeader, image1 }) {
  return (
    <div className="flex flex-col max-w-6xl mx-auto px-5 md:px-5 lg:flex-row items-center min-h-screen justify-center gap-12 lg:gap-20 py-10 lg:py-0">
      <div className="lg:w-1/2 w-full">
        <LeftHome subHeader={subHeader} />
      </div>
      <div className="lg:w-1/2 w-full flex justify-center">
        <RightHome image1={image1} />
      </div>

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 w-14 h-14 z-50 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:animate-bounce"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="w-full h-full object-contain"
        />
      </a>
    </div>
  )
}
