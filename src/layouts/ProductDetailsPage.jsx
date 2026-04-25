import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails.jsx";
import { fetchProduct } from "../services/api.service.js";

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setError("");
        setIsLoading(true);
        const data = await fetchProduct(id);
        setProduct(data);
      } catch (currentError) {
        setError(currentError.message);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [id]);

  if (isLoading) {
    return (
      <section className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="premium-panel rounded-[38px] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)]">
              <div className="h-128 rounded-[28px] bg-linear-to-br from-white via-amber-50 to-stone-200" />
              <div className="grid gap-4">
                <div className="h-4 w-28 rounded-full bg-slate-200/90" />
                <div className="h-16 w-full rounded-[20px] bg-slate-200/90" />
                <div className="h-12 w-40 rounded-full bg-slate-200/90" />
                <div className="h-4 w-full rounded-full bg-slate-200/80" />
                <div className="h-4 w-11/12 rounded-full bg-slate-200/80" />
                <div className="h-4 w-10/12 rounded-full bg-slate-200/80" />
                <div className="mt-4 h-12 w-56 rounded-full bg-slate-900/85" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="premium-panel rounded-[34px] px-6 py-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-700/70">
              Unable to Load
            </p>
            <h1 className="luxury-display mt-4 text-3xl text-slate-950">
              This product view is temporarily unavailable.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!product) {
    return null;
  }

  return <ProductDetails product={product} />;
}

export default ProductDetailsPage;
