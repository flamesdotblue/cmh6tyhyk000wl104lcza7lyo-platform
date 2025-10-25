import { Megaphone, BarChart, Globe, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Performance Ads',
    desc: 'Meta, TikTok, Google & LinkedIn campaigns engineered for measurable growth and profitable CAC.'
  },
  {
    icon: BarChart,
    title: 'Analytics & CRO',
    desc: 'Experimentation, funnel optimization, and analytics pipelines that turn traffic into revenue.'
  },
  {
    icon: Globe,
    title: 'SEO & Content',
    desc: 'Technical SEO, content strategy, and authority building to compound organic visibility.'
  },
  {
    icon: Sparkles,
    title: 'Creative Studio',
    desc: 'High-velocity performance creatives: UGC, motion, landing pages, and on-brand design systems.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What we do</h2>
          <p className="mt-2 max-w-2xl text-zinc-300">Integrated acquisition programs built on experimentation, creative excellence, and reliable attribution.</p>
        </div>
        <a href="#contact" className="hidden rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-100 sm:inline-flex">Get a proposal</a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/40 p-6 shadow-sm transition hover:bg-zinc-900/60">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{desc}</p>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
