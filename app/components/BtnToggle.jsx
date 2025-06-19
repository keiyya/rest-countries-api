"use client";

import { FaRegMoon } from "react-icons/fa";

function BtnToggle() {
  return (
    <button className="flex items-center gap-2 text-sm font-semibold cursor-pointer">
      <span>
        <FaRegMoon />
      </span>
      Dark Mode
    </button>
  );
}

export default BtnToggle;
