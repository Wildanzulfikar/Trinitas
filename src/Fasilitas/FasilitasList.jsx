export default function Fasilitas({image, header, text}) {
    return (
        <div className="flex flex-col flex-wrap gap-6 p-6 rounded-[4px] items-center text-center bg-white shadow">
            <img width={88} src={image} alt={text} />
            <h1 className="font-semibold text-[#ED3500]">{header}</h1>
            <p className="text-[14px]">{text}</p>
        </div>
    )
}