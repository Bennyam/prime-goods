import Product from "./Product.jsx";

function ProductList({ filteredProducts }) {
  if (filteredProducts.length === 0) {
    return (
      <section className="mx-auto mt-10 max-w-7xl">
        <div className="premium-panel rounded-[28px] px-5 py-10 text-center sm:rounded-[30px] sm:px-6 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            No Matches
          </p>
          <h2 className="luxury-display mt-4 text-2xl text-slate-950 sm:text-3xl">
            Nothing fits this filter combination yet.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
            Try a broader search or switch back to all categories to reopen the
            full collection.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto mt-10 max-w-7xl">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            Collection View
          </p>
          <h2 className="luxury-display mt-3 text-2xl text-slate-950 sm:text-4xl">
            Selected pieces, styled with more presence.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-600">
          A brighter grid, quieter spacing and stronger visual hierarchy make
          the catalogue feel more considered from the first glance.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
