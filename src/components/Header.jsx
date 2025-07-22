export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-dark text-white rounded-xl shadow mb-6">
      <h1 className="text-2xl font-bold mb-2 sm:mb-0 text-center sm:text-left">DeFi Swap</h1>
      
      <button className="bg-accent text-white px-4 py-2 rounded-lg hover:opacity-80 transition">
        Connect Wallet
      </button>
    </header>
  );
}
