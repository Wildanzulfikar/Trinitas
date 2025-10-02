export default function Siteplan() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold mb-4">
        Siteplan <span className="text-red-600">Gudang</span> Kami
      </h1>

      <img 
        src="/siteplan.png" 
        alt="Siteplan Gudang" 
        className="rounded-lg shadow-lg w-full max-w-6xl"
      />
    </div>
  );
}
