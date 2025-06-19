import BtnToggle from "./BtnToggle";

function Header() {
  return (
    <header className="bg-white shadow-md ">
      <div className="max-w-[1320px] flex items-center justify-between px-6 py-4 mx-auto">
        <h1 className="text-2xl font-bold">Where in the world</h1>
        <BtnToggle />
      </div>
    </header>
  );
}

export default Header;
