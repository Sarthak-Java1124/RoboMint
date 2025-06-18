export default function Feedback() {
    return (
        <div className="flex justify-center items-center mt-16 mb-16">
        <div className="relative bg-white rounded-2xl border-8 border-black shadow-xl p-10 pt-20 w-full max-w-md flex flex-col items-center">
          {/* Robot image at the top, overlapping the card */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2">
            <img src="https://robohash.org/example.png" alt="robot" className="w-32 h-32 rounded-full border-4 border-black bg-white" />
          </div>
          <h2 className="text-3xl font-extrabold text-black text-center leading-tight mb-2">GET YOUR<br/> ROBOTOS</h2>
          <p className="text-xs text-gray-800 font-mono text-center mb-6 mt-2">
            Robotos is a collection of droid characters designed by <span className="font-bold">Pablo Stanley</span> and minted as NFTs. They are constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Get your own!
          </p>
          <button className="bg-pink-500 text-white font-extrabold text-lg px-8 py-2 rounded-lg shadow-md border-2 border-pink-300 mb-4 hover:bg-pink-600 transition">Mint Robotos</button>
          <div className="bg-gray-100 rounded-md px-4 py-2 text-gray-700 font-mono text-xs text-center w-full">
            8,208 of 9,999 available<br/>
            0.05 ETH per roboto
          </div>
        </div>
      </div>
    );
}