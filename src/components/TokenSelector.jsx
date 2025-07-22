export default function TokenSelector({ label }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white w-full">
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <div className="flex justify-between items-center">
        <span className="font-semibold">ETH</span>
        <span className="text-gray-500">Balance: 1.23</span>
      </div>
    </div>
  );
}
