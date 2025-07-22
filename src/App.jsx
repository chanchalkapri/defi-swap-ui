import Header from './components/Header';
import SwapBox from './components/SwapBox';

export default function App() {
  return (
    <div className="bg-dark min-h-screen text-white flex flex-col items-center px-4">
      <Header />
      <SwapBox />
    </div>
  );
}
