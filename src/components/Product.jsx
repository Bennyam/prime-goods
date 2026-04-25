import { Link } from "react-router-dom";

function Product({ product }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);
  const hasLongTitle = product.title.length > 52;

  return (
    <article className="premium-panel group flex h-full flex-col overflow-hidden rounded-[28px] p-4 transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:rounded-[30px] sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-3">
        <span className="rounded-full bg-white/85 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-sm sm:text-[0.65rem] sm:tracking-[0.28em]">
          {product.category}
        </span>
        {product.rating?.rate ? (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900 sm:text-sm">
            {product.rating.rate.toFixed(1)} star edit
          </span>
        ) : null}
      </div>

      <div className="mt-5 flex min-h-60 items-center justify-center overflow-hidden rounded-[24px] bg-linear-to-br from-white via-amber-50 to-stone-200 p-6 sm:min-h-72 sm:rounded-[26px] sm:p-8">
        <img
          src={product.image}
          alt={product.title}
          className="h-44 w-full object-contain transition duration-500 group-hover:scale-105 group-hover:rotate-1 sm:h-52"
        />
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <div>
          <div className="title-reveal-trigger relative min-h-20 sm:min-h-24">
            <h3
              title={hasLongTitle ? product.title : undefined}
              className={[
                "luxury-display text-2xl leading-tight text-slate-950 sm:text-3xl",
                hasLongTitle ? "title-clamp-2" : "",
              ].join(" ")}
            >
              {product.title}
            </h3>

            {hasLongTitle ? (
              <div className="title-reveal-panel pointer-events-none absolute inset-x-0 top-full z-20 mt-3 rounded-[22px] bg-slate-950 px-4 py-3 text-sm leading-6 text-white shadow-2xl shadow-slate-950/20">
                {product.title}
              </div>
            ) : null}
          </div>

          <p className="product-copy mt-3 text-sm leading-6 text-slate-600">
            {product.description}
          </p>
        </div>

        <div className="mt-auto flex flex-col items-start gap-5 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
              Price
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">
              {formattedPrice}
            </p>
            {product.rating?.count ? (
              <p className="mt-2 text-sm text-slate-500">
                Based on {product.rating.count} shopper reviews.
              </p>
            ) : null}
          </div>

          <Link
            to={`/products/${product.id}`}
            className="w-full rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-slate-800 sm:w-auto"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Product;
