import { Link } from "react-router-dom";

const trustMarkers = [
  {
    label: "Curated Edit",
    value: "Seasonal essentials selected for calm, intentional living.",
  },
  {
    label: "Delivery Rhythm",
    value: "Smooth, reliable fulfilment designed for modern routines.",
  },
  {
    label: "Material Focus",
    value: "Objects with texture, warmth and understated presence.",
  },
];

const sideCards = [
  {
    eyebrow: "Editorial View",
    title: "A storefront that feels considered from the first scroll.",
    body: "We slow the experience down with cleaner hierarchy, softer contrast and a calmer narrative around every product moment.",
  },
  {
    eyebrow: "Client Care",
    title: "Assistance that feels closer to a concierge than a checklist.",
    body: "From discovery to decision, the interface keeps choices clear and the path forward easy on every screen size.",
  },
];

function HomeHero() {
  return (
    <section className="relative isolate overflow-x-hidden px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
      <div className="absolute left-[8%] top-10 -z-10 h-40 w-40 rounded-full bg-white/40 blur-3xl sm:h-56 sm:w-56" />
      <div className="absolute right-[8%] top-20 -z-10 h-52 w-52 rounded-full bg-amber-300/20 blur-3xl sm:top-24 sm:h-72 sm:w-72" />
      <div className="absolute bottom-8 left-1/2 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-stone-50/50 blur-3xl sm:h-80 sm:w-80" />

      <div className="mx-auto max-w-7xl">
        <div className="grid min-h-[calc(100svh-10rem)] gap-5 md:min-h-[calc(100svh-8.5rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-6">
          <article className="premium-panel relative flex h-full flex-col justify-between overflow-hidden rounded-4xl px-5 py-7 sm:rounded-[38px] sm:px-8 sm:py-10 lg:px-12 lg:py-12 fade-up">
            <div className="absolute -right-10 top-6 h-28 w-28 rounded-full bg-amber-300/25 blur-3xl sm:-right-12 sm:top-8 sm:h-40 sm:w-40" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/45 blur-3xl sm:h-44 sm:w-44" />

            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-amber-900/65 sm:text-xs sm:tracking-[0.45em]">
                Premium Living, Edited Well
              </p>
              <h1 className="luxury-display mt-5 max-w-4xl text-4xl leading-none text-slate-950 sm:text-5xl lg:text-7xl">
                Objects for living well, presented with calm confidence.
              </h1>
              <p className="mt-5 max-w-2xl text-[0.95rem] leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8">
                Prime Goods brings together considered essentials with a slower,
                more elevated browsing experience. Every surface, gap and call
                to action is shaped to feel warm, premium and quietly assured.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                to="/products"
                className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-slate-800"
              >
                Browse the collection
              </Link>
              <a
                href="#home-story"
                className="rounded-full border border-slate-900/10 bg-white/70 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.22em] text-slate-800 transition duration-300 hover:bg-white"
              >
                Discover the mood
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
              {trustMarkers.map((marker) => (
                <div
                  key={marker.label}
                  className="soft-outline rounded-3xl bg-white/68 p-5"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                    {marker.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {marker.value}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-6 fade-up-delayed">
            <article className="premium-panel flex min-h-72 flex-col justify-between overflow-hidden rounded-[30px] px-5 py-6 sm:min-h-80 sm:rounded-[34px] sm:px-8 sm:py-8">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Signature Atmosphere
                </p>
                <h2 className="luxury-display mt-4 text-2xl leading-tight text-slate-950 sm:text-4xl">
                  Brighter materials, softer shadows and a more gallery-like
                  rhythm.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  The homepage now introduces the brand through space and tone,
                  not just text. It feels more like an invitation than a list of
                  links.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950 px-5 py-5 text-white">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/55">
                    Design Note
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    High-contrast anchors keep the luxury look grounded and easy
                    to navigate.
                  </p>
                </div>

                <div className="soft-outline rounded-3xl bg-white/72 px-5 py-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Responsive Flow
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Large hero energy on desktop, calmer stacked spacing on
                    mobile.
                  </p>
                </div>
              </div>
            </article>

            <div
              id="home-story"
              className="grid gap-6 sm:grid-cols-2 lg:min-h-60"
            >
              {sideCards.map((card) => (
                <article
                  key={card.eyebrow}
                  className="premium-panel flex h-full flex-col rounded-[28px] px-5 py-6 sm:rounded-[30px] sm:px-6 sm:py-7"
                >
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                    {card.eyebrow}
                  </p>
                  <h3 className="luxury-display mt-4 text-2xl leading-tight text-slate-950 sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
