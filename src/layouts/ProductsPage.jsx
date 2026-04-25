import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api.service.js";
import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar.jsx";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const categories = [...new Set(products.map((product) => product.category))];

  useEffect(() => {
    async function getData() {
      try {
        setError("");
        setIsLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <div className="relative isolate overflow-x-hidden px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
      <div className="absolute left-1/2 top-16 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-white/30 blur-3xl sm:h-80 sm:w-80" />
      <section className="mx-auto max-w-7xl">
        <div className="premium-panel relative overflow-hidden rounded-4xl px-5 py-7 sm:rounded-[36px] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="absolute -right-8 top-0 h-32 w-32 rounded-full bg-amber-300/30 blur-3xl sm:-right-10 sm:h-48 sm:w-48" />
          <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-white/45 blur-3xl sm:h-40 sm:w-40" />

          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
            <div className="fade-up">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-amber-900/65 sm:text-xs sm:tracking-[0.45em]">
                Prime Curated Selection
              </p>
              <h1 className="luxury-display mt-4 max-w-3xl text-3xl leading-none text-slate-950 sm:text-5xl lg:text-6xl">
                A more refined way to browse everyday essentials.
              </h1>
              <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-slate-700 sm:mt-5 sm:text-lg">
                A calmer, more editorial shopping flow for statement pieces,
                wardrobe staples and modern accessories, all presented with
                stronger hierarchy and breathing room.
              </p>
            </div>

            <div className="fade-up-delayed grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="soft-outline rounded-3xl bg-slate-950 px-5 py-5 text-white">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/55">
                  Products
                </p>
                <p className="mt-2 text-3xl font-semibold">
                  {String(products.length).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Pieces currently in the collection.
                </p>
              </div>

              <div className="soft-outline rounded-3xl bg-white/75 px-5 py-5 text-slate-900">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-500">
                  Categories
                </p>
                <p className="mt-2 text-3xl font-semibold">
                  {String(categories.length).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Distinct edits to explore and filter.
                </p>
              </div>

              <div className="soft-outline rounded-3xl bg-white/75 px-5 py-5 text-slate-900">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-500">
                  Visible now
                </p>
                <p className="mt-2 text-3xl font-semibold">
                  {String(filteredProducts.length).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Updated live as you refine the view.
                </p>
              </div>
            </div>
          </div>

          <FilterBar
            products={products}
            setFilteredProducts={setFilteredProducts}
            categories={categories}
            resultCount={filteredProducts.length}
          />
        </div>
      </section>

      {isLoading ? (
        <section className="mx-auto mt-10 max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="premium-panel overflow-hidden rounded-[28px] p-4 sm:rounded-[30px] sm:p-5"
              >
                <div className="h-6 w-32 rounded-full bg-slate-200/90" />
                <div className="mt-4 h-64 rounded-3xl bg-linear-to-br from-white via-amber-50 to-stone-200 sm:h-72" />
                <div className="mt-6 h-8 w-3/4 rounded-full bg-slate-200/90" />
                <div className="mt-3 h-4 w-full rounded-full bg-slate-200/80" />
                <div className="mt-2 h-4 w-5/6 rounded-full bg-slate-200/80" />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="h-10 w-28 rounded-full bg-slate-200/90" />
                  <div className="h-12 w-32 rounded-full bg-slate-900/85" />
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : error ? (
        <section className="mx-auto mt-10 max-w-7xl">
          <div className="premium-panel rounded-[28px] px-5 py-8 text-center sm:rounded-[30px] sm:px-6 sm:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-700/70">
              Unable to Load
            </p>
            <h2 className="luxury-display mt-4 text-2xl text-slate-950 sm:text-3xl">
              The collection is temporarily out of reach.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              {error}
            </p>
          </div>
        </section>
      ) : (
        <ProductList filteredProducts={filteredProducts} />
      )}
    </div>
  );
}

export default ProductsPage;
