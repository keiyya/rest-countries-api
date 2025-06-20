function Card({ name, population, flag, region, capital }) {
  return (
    <div className="bg-white shadow-md rounded-lg m-2">
      <img
        src={flag}
        alt={`Flag of ${name}`}
        className="w-full h-32 object-cover rounded-t-lg mb-4"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="font-semibold text-sm">
          Population: <span className="font-normal">{population}</span>
        </p>
        <p className="font-semibold text-sm">
          Region: <span className="font-normal">{region}</span>
        </p>
        <p className="font-semibold text-sm">
          Capital: <span className="font-normal">{capital}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
