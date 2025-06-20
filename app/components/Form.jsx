"use client";

import { IoSearchSharp } from "react-icons/io5";

function Form({
  selectedRegion,
  setSelectedRegion,
  regions,
  setSearchTerm,
  searchTerm,
}) {
  return (
    <form className="flex items-center justify-between max-w-[1310px] mx-auto px-6 py-4">
      <div className="relative bg-white shadow-md rounded-lg px-4 py-2 flex items-center gap-2 w-full max-w-[400px] text-grey-400">
        <IoSearchSharp />
        <input
          type="text"
          placeholder="Search for a country..."
          className="px-4 py-2 w-full max-w-[400px] text-sm font-semibold outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="bg-white px-4 py-2 ,y-2 rounded-lg shadow-md text-sm font-semibold text-grey-950 mb-2">
          Filter by Region
        </label>
        <select
          className="bg-white shadow-md rounded-lg px-4 py-2 w-full max-w-[200px] text-sm font-semibold outline-none"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default Form;
