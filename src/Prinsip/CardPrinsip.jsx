// CardPrinsip.jsx
export default function CardPrinsip({ image, text, deskripsi }) {
  return (
    <div className="flex flex-col items-center gap-4 shadow bg-white p-6 rounded-2xl max-w-sm w-full">
      <img className="w-20 h-20 object-contain" src={image} alt={text} />
      <p className="text-center text-xl md:text-2xl font-semibold">{text}</p>
      <span className="text-[#656464] text-center text-sm md:text-base">{deskripsi}</span>
    </div>
  );
}
