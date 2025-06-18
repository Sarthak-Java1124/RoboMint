export default function Manyicons() {
    return (
        <div className="w-full min-h-[600px] bg-yellow-200 relative overflow-x-hidden overflow-y-auto" style={{backgroundImage: 'repeating-radial-gradient(circle, #fff7c7 0px, #fff7c7 20px, transparent 21px, transparent 60px)'}}>
        <div className="grid grid-cols-8 md:grid-cols-10 gap-0 w-full">
          {Array.from({length: 40}).map((_, i) => (
            <img
              key={i}
              src={`https://robohash.org/robot${i}.png?set=set1`}
              alt={`robot${i}`}
              className="w-full aspect-square object-cover"
            />
          ))}
        </div>
      </div>
    );
}