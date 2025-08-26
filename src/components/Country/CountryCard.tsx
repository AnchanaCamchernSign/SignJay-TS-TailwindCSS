import React from "react";
import type { Country } from "../../types/Country";

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img
      src={country.flags.png}
      alt={country.name.common}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold">{country.name.common}</h2>
      <p className="text-gray-600">Region: {country.region}</p>
      <p className="text-gray-500">Population: {country.population.toLocaleString()}</p>
      {country.capital && <p className="text-gray-500">Capital: {country.capital[0]}</p>}
    </div>
  </div>
);

export default CountryCard;
