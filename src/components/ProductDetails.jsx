import { Link } from "react-router-dom";

const detailNotes = [
  {
    label: "Category",
    getValue: (product) => product.category,
  },
  {
    label: "Editorial Rating",
    getValue: (product) =>
      product.rating?.rate ? `${product.rating.rate.toFixed(1)} / 5` : "N/A",
  },
  {
    label: "Review Count",
    getValue: (product) =>
      product.rating?.count ? `${product.rating.count} shopper notes` : "N/A",
  },
];

function ProductDetails({ product }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);
  const hasLongTitle = product.title.length > 68;

  return (
    <section className="relative isolate overflow-x-hidden px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
      <div className="absolute left-[8%] top-14 -z-10 h-40 w-40 rounded-full bg-white/40 blur-3xl sm:h-56 sm:w-56" />
      <div className="absolute right-[8%] top-10 -z-10 h-52 w-52 rounded-full bg-amber-300/20 blur-3xl sm:h-72 sm:w-72" />

      <div className="mx-auto max-w-7xl">
        <div className="premium-panel relative overflow-hidden rounded-4xl px-5 py-7 sm:rounded-[38px] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="absolute -right-8 top-0 h-28 w-28 rounded-full bg-amber-300/25 blur-3xl sm:-right-10 sm:h-40 sm:w-40" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/45 blur-3xl sm:h-44 sm:w-44" />

          <div className="flex flex-col gap-4 border-b border-slate-900/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-amber-900/65 sm:text-xs sm:tracking-[0.45em]">
                Product Details
              </p>
              <div className="title-reveal-trigger relative mt-4 max-w-3xl">
                <h1
                  title={hasLongTitle ? product.title : undefined}
                  className={[
                    "luxury-display text-3xl leading-none text-slate-950 sm:text-5xl lg:text-6xl",
                    hasLongTitle ? "title-clamp-2" : "",
                  ].join(" ")}
                >
                  {product.title}
                </h1>

                {hasLongTitle ? (
                  <div className="title-reveal-panel pointer-events-none absolute inset-x-0 top-full z-20 mt-4 rounded-3xl bg-slate-950 px-5 py-4 text-sm leading-7 text-white shadow-2xl shadow-slate-950/20 sm:text-base">
                    {product.title}
                  </div>
                ) : null}
              </div>
            </div>
            <Link
              to="/products"
              className="self-start rounded-full border border-slate-900/10 bg-white/75 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-800 transition duration-300 hover:bg-white"
            >
              Back to products
            </Link>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)] lg:items-start">
            <div className="premium-panel rounded-[28px] p-4 sm:rounded-4xl sm:p-6">
              <div className="flex min-h-80 items-center justify-center rounded-3xl bg-linear-to-br from-white via-amber-50 to-stone-200 p-6 sm:min-h-120 sm:rounded-[28px] sm:p-8">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-72 w-full object-contain sm:max-h-112"
                />
              </div>
            </div>

            <div className="grid gap-6">
              <article className="soft-outline rounded-[28px] bg-white/72 px-5 py-5 sm:rounded-[30px] sm:px-7 sm:py-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-white/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-sm">
                    {product.category}
                  </span>
                  {product.rating?.rate ? (
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-900">
                      {product.rating.rate.toFixed(1)} star edit
                    </span>
                  ) : null}
                </div>

                <div className="mt-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Price
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950 sm:text-4xl">
                    {formattedPrice}
                  </p>
                </div>

                <p className="mt-6 text-[0.95rem] leading-7 text-slate-700 sm:text-base sm:leading-8">
                  {product.description}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    className="w-full rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-slate-800 sm:w-auto"
                  >
                    Contact about this piece
                  </Link>
                  <Link
                    to="/products"
                    className="w-full rounded-full border border-slate-900/10 bg-white/75 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.22em] text-slate-800 transition duration-300 hover:bg-white sm:w-auto"
                  >
                    Continue browsing
                  </Link>
                </div>
              </article>

              <div className="grid gap-4 sm:grid-cols-3">
                {detailNotes.map((note) => (
                  <article
                    key={note.label}
                    className="soft-outline rounded-[22px] bg-white/72 px-5 py-5 sm:rounded-3xl"
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                      {note.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {note.getValue(product)}
                    </p>
                  </article>
                ))}
              </div>

              <article className="rounded-3xl bg-slate-950 px-5 py-5 text-white sm:rounded-[28px] sm:px-6 sm:py-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-white/55">
                  Viewing Note
                </p>
                <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                  This details page is intentionally focused on presentation and
                  product context. There is no cart flow here, just a calmer
                  path back to the collection or into direct contact.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
