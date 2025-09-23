// HomeList.jsx
import LeftHome from "./LeftHome"
import RightHome from "./RightHome"

export default function HomeList({ subHeader, image1 }) {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen items-center justify-center px-6 lg:px-20 gap-12 lg:gap-20 py-10 lg:py-0">
      <div className="flex-1 w-full">
        <LeftHome subHeader={subHeader} />
      </div>
      <div className="flex-1 w-full flex justify-center">
        <RightHome image1={image1} />
      </div>
    </div>
  )
}
