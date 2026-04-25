const contactMoments = [
  {
    label: "General Enquiries",
    detail: "Questions about the collection, styling or current availability.",
  },
  {
    label: "Trade Requests",
    detail: "Support for larger orders, partnerships and curated selections.",
  },
  {
    label: "Response Rhythm",
    detail: "A thoughtful reply within one working day for most requests.",
  },
];

const supportNotes = [
  "Collection guidance tailored to your needs.",
  "No hard-sell checkout flow, just direct assistance.",
  "Calm, readable layout that works smoothly on smaller screens.",
];

function ContactForm() {
  return (
    <section className="relative isolate overflow-x-hidden px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
      <div className="absolute left-[10%] top-10 -z-10 h-40 w-40 rounded-full bg-white/40 blur-3xl sm:h-56 sm:w-56" />
      <div className="absolute right-[6%] top-16 -z-10 h-52 w-52 rounded-full bg-amber-300/20 blur-3xl sm:h-72 sm:w-72" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)]">
          <article className="premium-panel relative overflow-hidden rounded-4xl px-5 py-7 sm:rounded-[36px] sm:px-8 sm:py-8 lg:px-10 lg:py-10 fade-up">
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/45 blur-3xl sm:h-44 sm:w-44" />

            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-amber-900/65 sm:text-xs sm:tracking-[0.45em]">
              Contact Prime Goods
            </p>
            <h1 className="luxury-display mt-4 max-w-xl text-3xl leading-none text-slate-950 sm:text-5xl lg:text-6xl">
              Reach out for a calmer, more personal conversation.
            </h1>
            <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-slate-700 sm:mt-5 sm:text-lg sm:leading-8">
              Whether you have a question about a specific piece or want help
              navigating the collection, this contact page keeps the exchange
              simple, premium and easy to use.
            </p>

            <div className="mt-8 grid gap-4">
              {contactMoments.map((item) => (
                <div
                  key={item.label}
                  className="soft-outline rounded-3xl bg-white/72 px-5 py-5"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] bg-slate-950 px-6 py-6 text-white">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-white/55">
                What this page is for
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/75">
                {supportNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="premium-panel relative overflow-hidden rounded-4xl px-5 py-7 sm:rounded-[36px] sm:px-8 sm:py-8 lg:px-10 lg:py-10 fade-up-delayed">
            <div className="absolute -right-8 top-0 h-28 w-28 rounded-full bg-amber-300/20 blur-3xl sm:-right-10 sm:h-40 sm:w-40" />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Contact Form
                </p>
                <h2 className="luxury-display mt-3 text-2xl text-slate-950 sm:text-4xl">
                  Send a message
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-slate-600">
                This is a presentation-only flow, shaped to feel polished
                without introducing checkout or cart behaviour.
              </p>
            </div>

            <form
              className="mt-8 grid gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                    First name
                  </span>
                  <input
                    type="text"
                    placeholder="Avery"
                    className="mt-3 w-full rounded-[20px] border border-white/70 bg-white/90 px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition duration-300 placeholder:text-slate-400 focus:border-slate-300 focus:shadow-lg focus:shadow-slate-900/10"
                  />
                </label>

                <label className="block">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Last name
                  </span>
                  <input
                    type="text"
                    placeholder="Carter"
                    className="mt-3 w-full rounded-[20px] border border-white/70 bg-white/90 px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition duration-300 placeholder:text-slate-400 focus:border-slate-300 focus:shadow-lg focus:shadow-slate-900/10"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Email
                  </span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-3 w-full rounded-[20px] border border-white/70 bg-white/90 px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition duration-300 placeholder:text-slate-400 focus:border-slate-300 focus:shadow-lg focus:shadow-slate-900/10"
                  />
                </label>

                <label className="block">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Topic
                  </span>
                  <select className="mt-3 w-full rounded-[20px] border border-white/70 bg-white/90 px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition duration-300 focus:border-slate-300 focus:shadow-lg focus:shadow-slate-900/10">
                    <option>Product enquiry</option>
                    <option>General question</option>
                    <option>Trade request</option>
                    <option>Styling help</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Message
                </span>
                <textarea
                  rows="6"
                  placeholder="Tell us a little about what you are looking for."
                  className="mt-3 w-full resize-none rounded-3xl border border-white/70 bg-white/90 px-4 py-4 text-base text-slate-900 shadow-sm outline-none transition duration-300 placeholder:text-slate-400 focus:border-slate-300 focus:shadow-lg focus:shadow-slate-900/10"
                />
              </label>

              <div className="flex flex-col gap-4 rounded-[28px] bg-stone-100/85 px-5 py-5 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-xl text-sm leading-6 text-slate-600">
                  This form is intentionally view-only for now. It completes the
                  interface without introducing backend handling or a sales
                  cart.
                </p>
                <button
                  type="submit"
                  className="w-full whitespace-nowrap rounded-full bg-slate-950 px-7 py-3 text-center text-sm font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-slate-800 sm:w-auto sm:shrink-0"
                >
                  Send message
                </button>
              </div>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
