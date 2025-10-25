import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ProcessCTA() {
  const steps = [
    {
      title: 'Discovery & Audit',
      desc: 'We analyze your funnel, creative, and analytics to find growth levers.'
    },
    {
      title: 'Strategy Sprint',
      desc: 'Prioritized roadmap across channels, creative, and experiments.'
    },
    {
      title: 'Launch & Learn',
      desc: 'Ship fast, measure rigorously, and iterate weekly with full transparency.'
    }
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A process engineered for compound growth</h2>
          <ul className="mt-6 space-y-4">
            {steps.map((s) => (
              <li key={s.title} className="flex gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-none text-emerald-400" />
                <div>
                  <div className="font-medium">{s.title}</div>
                  <p className="text-zinc-300">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
          <div className="text-sm font-medium text-zinc-300">Get your free growth plan</div>
          <h3 className="mt-2 text-2xl font-semibold">Tell us about your goals</h3>
          <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input className="col-span-1 rounded-md border border-white/10 bg-zinc-900/60 px-3 py-2 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-white/20" placeholder="Name" />
            <input className="col-span-1 rounded-md border border-white/10 bg-zinc-900/60 px-3 py-2 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-white/20" placeholder="Company" />
            <input type="email" className="col-span-1 rounded-md border border-white/10 bg-zinc-900/60 px-3 py-2 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-white/20" placeholder="Work email" />
            <input className="col-span-1 rounded-md border border-white/10 bg-zinc-900/60 px-3 py-2 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-white/20" placeholder="Website" />
            <textarea className="col-span-1 sm:col-span-2 h-24 rounded-md border border-white/10 bg-zinc-900/60 px-3 py-2 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-white/20" placeholder="What are you trying to achieve?" />
            <button type="button" className="group col-span-1 sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-100">
              Request proposal
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </form>
          <p className="mt-3 text-xs text-zinc-400">We typically respond within 1 business day.</p>
        </div>
      </div>
    </section>
  );
}
