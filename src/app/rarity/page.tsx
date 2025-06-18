import Navbar from "../components/Navbar";
import Rarity from "../components/Rarity";
import Footer from "../components/Footer";

export default function RarityPage() {
  return (
    <div className="bg-red-700 w-full flex flex-col relative overflow-hidden min-h-screen">
      <div className="w-full flex justify-center pt-4">
        <Navbar/>
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-white mb-8 tracking-tight">
            RARITY
          </h1>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Discover the unique traits and rarity levels of the Robotos NFT collection
          </p>
        </div>
      </div>
      
      <Rarity />
      <Footer />
    </div>
  );
} 