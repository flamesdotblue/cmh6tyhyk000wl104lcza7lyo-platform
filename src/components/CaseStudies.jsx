export default function CaseStudies() {
  const cases = [
    {
      kpi: '+223% ROAS',
      brand: 'D2C Apparel',
      blurb: 'Scaled Meta + TikTok with creative sprints and post-click CRO.'
    },
    {
      kpi: '-37% CAC',
      brand: 'Fintech App',
      blurb: 'Full-funnel search + UGC paid social with lifecycle automation.'
    },
    {
      kpi: '+118% Organic',
      brand: 'B2B SaaS',
      blurb: 'Technical SEO overhaul and product-led content engine.'
    }
  ];

  return (
    <section id="work" className="relative border-t border-white/10 bg-zinc-950/60">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected results</h2>
          <p className="mt-2 max-w-2xl text-zinc-300">Proven outcomes across consumer, B2B, and marketplaces. We partner for outcomes, not vanity metrics.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <article key={c.brand} className="rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 p-6">
              <div className="text-2xl font-semibold">{c.kpi}</div>
              <div className="mt-1 text-sm uppercase tracking-wide text-zinc-400">{c.brand}</div>
              <p className="mt-3 text-zinc-300">{c.blurb}</p>
              <div className="mt-6 h-28 w-full rounded-lg bg-zinc-800/50 ring-1 ring-white/10" aria-hidden />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
