import { useEffect, useState } from "react";

function FilterBar({
  products,
  setFilteredProducts,
  categories,
  resultCount,
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => {
        const matchesSearch = product.title
          .toLowerCase()
          .includes(search.toLowerCase());

        const matchesCategory =
          category === "" || product.category === category;

        return matchesSearch && matchesCategory;
      }),
    );
  }, [search, category, setFilteredProducts, products]);

  return (
    <section className="mt-8 sm:mt-10">
      <div className="soft-outline flex flex-col gap-4 rounded-[24px] bg-white/65 p-4 sm:rounded-[28px] sm:p-5 lg:flex-row lg:items-end">
        <div className="flex-1">
          <label
            htmlFor="product-search"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500"
          >
            Search the collection
          </label>
          <input
            id="product-search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by product name"
            className="mt-3 w-full rounded-[20px] border border-white/70 bg-white/90 px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition duration-300 placeholder:text-slate-400 focus:border-slate-300 focus:shadow-lg focus:shadow-slate-900/10"
          />
        </div>

        <div className="lg:w-72">
          <label
            htmlFor="category"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500"
          >
            Category
          </label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-3 w-full rounded-[20px] border border-white/70 bg-white/90 px-4 py-3 text-base capitalize text-slate-900 shadow-sm outline-none transition duration-300 focus:border-slate-300 focus:shadow-lg focus:shadow-slate-900/10"
          >
            <option value="">All categories</option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="soft-outline rounded-[22px] bg-slate-950 px-5 py-4 text-white sm:max-w-xs lg:max-w-none lg:min-w-44">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/55">
            Visible now
          </p>
          <p className="mt-2 text-3xl font-semibold">
            {String(resultCount).padStart(2, "0")}
          </p>
          <p className="mt-2 text-sm text-white/70">
            Matching pieces after filtering.
          </p>
        </div>
      </div>
    </section>
  );
}
export default FilterBar;
