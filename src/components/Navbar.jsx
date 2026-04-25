import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClassName = ({ isActive }) =>
    [
      "rounded-full px-2.5 py-2 text-center text-[0.68rem] font-semibold tracking-[0.12em] uppercase transition duration-300 sm:px-4 sm:text-sm sm:tracking-[0.18em]",
      isActive
        ? "bg-slate-950 text-white shadow-lg shadow-slate-950/20"
        : "text-slate-700 hover:bg-white/70 hover:text-slate-950",
    ].join(" ");

  return (
    <nav className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
      <div className="premium-panel mx-auto flex max-w-7xl flex-col gap-4 rounded-[30px] px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:rounded-full">
        <NavLink to="/" className="flex items-center gap-3 md:w-auto">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-[0.65rem] font-bold uppercase tracking-[0.35em] text-white sm:h-11 sm:w-11 sm:text-xs">
            PG
          </div>
          <div className="min-w-0">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-amber-900/70 sm:text-[0.65rem] sm:tracking-[0.35em]">
              Curated Goods
            </p>
            <h1 className="luxury-display text-xl text-slate-950 sm:text-2xl">
              Prime Goods
            </h1>
          </div>
        </NavLink>

        <div className="grid w-full grid-cols-3 gap-2 md:flex md:w-auto md:items-center md:gap-2">
          <NavLink to="/" className={navLinkClassName}>
            Home
          </NavLink>
          <NavLink to="/products" className={navLinkClassName}>
            Products
          </NavLink>
          <NavLink to="/contact" className={navLinkClassName}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
