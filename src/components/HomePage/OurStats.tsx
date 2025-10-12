import parcelStatsImg from "../../assets/images/parcel-stats.jpg";
const stats = [
  {
    name: "Packages Delivered",
    stat: "457",
  },
  {
    name: "Repeated Customers",
    stat: 37,
  },
  {
    name: "Clients Nationwide",
    stat: 3000,
  },
];
const OurStats = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${parcelStatsImg})` }}
        className="relative h-80 w-full bg-cover bg-no-repeat bg-fixed flex items-center justify-center "
      >
        <div className="absolute inset-0 bg-black/60 bg-opacity-40"></div>
        <div className="relative z-10 text-white flex items-center  justify-around w-full">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <p className="font-bold text-5xl">{item.stat}+</p>
              <h3 className="font-bold text-3xl">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStats;
