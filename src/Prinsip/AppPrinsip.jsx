// AppPrinsip.jsx
import CardPrinsip from "./CardPrinsip";
import { getPrinsip } from "./Prinsip";

export default function AppPrinsip() {
  const prinsips = getPrinsip();

  return (
    <>
      <h1 className="mt-20 px-6 font-bold text-2xl md:text-3xl text-center md:text-left">
        Prinsip <span className="text-[#ED3500]">Utama</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-24 px-6">
        {prinsips.map((prinsip) => (
          <CardPrinsip key={prinsip.id} {...prinsip} />
        ))}
      </div>
    </>
  );
}
