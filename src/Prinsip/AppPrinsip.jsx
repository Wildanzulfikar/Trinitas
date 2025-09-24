// AppPrinsip.jsx
import CardPrinsip from "./CardPrinsip";
import { getPrinsip } from "./Prinsip";

export default function AppPrinsip() {
  const prinsips = getPrinsip();

  return (
      <div className="flex flex-col px-10 mt-10 mb-20 md:max-w-6xl md:mx-auto">
        <h1 className="mb-10 font-bold text-2xl text-center">
          Prinsip <span className="text-[#ED3500]">Utama</span>
        </h1>
        <div className="flex justify-evenly gap-8">
          {prinsips.map((prinsip) => (
            <CardPrinsip key={prinsip.id} {...prinsip} />
          ))}
        </div>
      </div>
  );
}
