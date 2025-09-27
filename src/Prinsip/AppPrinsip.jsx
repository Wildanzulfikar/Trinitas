import CardPrinsip from "./CardPrinsip";
import { getPrinsip } from "./Prinsip";

export default function AppPrinsip() {
  const prinsips = getPrinsip();

  return (
      <div className="flex px-5 md:px-5 flex-col max-w-6xl mx-auto mt-10 mb-20">

        <h1 className="font-extrabold text-3xl px-6 shadow mx-auto py-2 rounded-full border border-gray-200">
          Prinsip <span className="text-[#ED3500]">Utama</span>
        </h1>

        <div className="flex flex-wrap mt-11 justify-center md:justify-between gap-8">
          {prinsips.map((prinsip) => (
            <CardPrinsip key={prinsip.id} {...prinsip} />
          ))}
        </div>
      </div>
  );
}
