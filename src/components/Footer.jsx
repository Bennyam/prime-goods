import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-4 pt-10 pb-4 sm:px-6 sm:pt-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="premium-panel relative overflow-hidden rounded-[28px] px-5 py-7 sm:rounded-4xl sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="absolute -right-8 top-0 h-28 w-28 rounded-full bg-amber-300/20 blur-3xl sm:-right-10 sm:h-40 sm:w-40" />
          <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-white/45 blur-3xl sm:h-36 sm:w-36" />

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.6fr)_minmax(0,0.8fr)]">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-amber-900/65 sm:text-xs sm:tracking-[0.45em]">
                Prime Goods
              </p>
              <h2 className="luxury-display mt-4 max-w-xl text-3xl leading-none text-slate-950 sm:text-4xl">
                A calmer storefront for modern essentials.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                The new layout keeps the same premium visual language from first
                hero to final footer, with spacing that stays breathable across
                mobile, tablet and desktop.
              </p>
            </div>

            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                Navigate
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  to="/"
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800 transition duration-300 hover:text-slate-950"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800 transition duration-300 hover:text-slate-950"
                >
                  Products
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800 transition duration-300 hover:text-slate-950"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                Experience
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Editorial layout, warm material tones and interface rhythm that
                makes browsing feel more deliberate and less noisy.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-900/10 pt-6 text-center text-sm text-slate-600 sm:flex sm:items-center sm:justify-between sm:text-left">
            <p>© {new Date().getFullYear()} Prime Goods. Curated with care.</p>
            <p className="mt-3 sm:mt-0">
              Built to feel polished on every screen.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
