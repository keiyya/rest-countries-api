"use client";

import { useEffect, useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((countries) => setCountries(countries));
  }, []);

  const regions = [
    "All",
    ...new Set(countries.map((c) => c.region).filter(Boolean)),
  ];

  const filteredCountries = countries
    .filter((country) =>
      selectedRegion === "All" ? true : country.region === selectedRegion
    )
    .filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <main className="my-8">
      <Form
        regions={regions}
        setSelectedRegion={setSelectedRegion}
        selectedRegion={selectedRegion}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCountries?.map((country, index) => (
          <Card
            key={country.alpha3Code || index}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        )) || <p>Loading...</p>}
      </div>
    </main>
  );
}
