"use client";

import { IoSearchSharp } from "react-icons/io5";

function Form() {
  return (
    <form className="flex items-center justify-between max-w-[1310px] mx-auto px-6 py-4">
      <div className="relative bg-white shadow-md rounded-lg px-4 py-2 flex items-center gap-2 w-full max-w-[400px] text-grey-400">
        <IoSearchSharp />
        <input
          type="text"
          placeholder="Search for a country..."
          className="px-4 py-2 w-full max-w-[400px] text-sm font-semibold outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label>Filter by Region</label>
        <select className="bg-white shadow-md rounded-lg px-4 py-2 w-full max-w-[200px] text-sm font-semibold outline-none">
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
