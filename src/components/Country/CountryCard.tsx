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
      className="w-full h-48 p-2 border-1 border-gray-300 shadow-sm"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold">{country.name.common}</h2>
      <p className="text-gray-600"> Region: {country.region}</p>
      {country.capital && <p className="text-gray-600">Capital : {country.capital[0]}</p>}
    </div>
  </div>
);

export default CountryCard;
