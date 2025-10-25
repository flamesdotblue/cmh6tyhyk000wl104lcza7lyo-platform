import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/50 to-zinc-950/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 sm:px-8">
        <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20 backdrop-blur">
          <Rocket className="mr-1.5 h-3.5 w-3.5" />
          Digital Marketing Agency
        </div>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          We transform brands with data-driven growth marketing
        </h1>
        <p className="mt-5 max-w-2xl text-base text-zinc-200 sm:text-lg">
          Full-funnel strategy, performance creatives, and conversion-focused execution to acquire, retain, and delight your customers.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-zinc-900 shadow-sm transition hover:bg-zinc-100">
            Start a project
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#work" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-white ring-1 ring-white/20 transition hover:bg-white/20">
            See our work
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-zinc-300 sm:grid-cols-4">
          <div className="rounded-md border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            +200% ROAS
          </div>
          <div className="rounded-md border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            1M+ Conversions
          </div>
          <div className="rounded-md border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            Global Reach
          </div>
          <div className="rounded-md border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            Award Winning
          </div>
        </div>
      </div>
    </section>
  );
}
