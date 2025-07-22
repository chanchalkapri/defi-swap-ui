import TokenSelector from './TokenSelector';

export default function SwapBox() {
  return (
    <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl w-[90%] max-w-md mx-auto mt-10 shadow-2xl">
      <TokenSelector label="From" />
      
      <div className="text-center my-4 text-gray-400 text-2xl sm:text-3xl">
        ↓
      </div>
      
      <TokenSelector label="To" />
      
      <button className="mt-6 w-full bg-accent text-white py-3 rounded-xl hover:opacity-80 transition text-lg font-semibold">
        Swap
      </button>
    </div>
  );
}
