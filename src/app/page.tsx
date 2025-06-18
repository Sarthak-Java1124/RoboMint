import Image from "next/image";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import MintButton from "./components/Mintbbutton";
import Feedback from "./components/Feedback";
import Manyicons from "./components/Manyicons";
import Rarity from "./components/Rarity";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <div className="bg-red-700 w-full flex flex-col relative overflow-hidden">
        {/* Removed decorative images around the page */}
     
        <div className="w-full flex justify-center pt-4">
          <Navbar/>
        </div>
      
        <Title/>
        <MintButton></MintButton>
        <Feedback></Feedback>
        <Manyicons></Manyicons>
        <Rarity></Rarity>
        <FAQ />
        <Footer />
      </div>
  );
}
