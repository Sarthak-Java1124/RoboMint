import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function FAQPage() {
  return (
    <div className="bg-red-700 w-full flex flex-col relative overflow-hidden min-h-screen">
      <div className="w-full flex justify-center pt-4">
        <Navbar/>
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-white mb-8 tracking-tight">
            FAQ
          </h1>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Frequently asked questions about the Robotos NFT collection
          </p>
        </div>
      </div>
      
      <FAQ />
      <Footer />
    </div>
  );
} 