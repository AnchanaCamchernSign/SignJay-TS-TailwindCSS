import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";
import type { Country } from "../../types/Country";

const API_URL = 'https://restcountries.com/v3.1/all?fields=cca3,name,capital,region,flags';


export const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setCountries(response.data as Country[]);
        console.log("API data:", response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="mt-12 p-6 min-h-screen">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.length > 0 ? (
            countries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))
          ) : (
            <p>No countries found</p>
          )}
        </div>
      )}
    </div>
  );
};
