import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06060a] text-zinc-100">
      <div className="stars pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-violet-600/30 animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-fuchsia-600/20 animate-pulse-glow [animation-delay:2s]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-24 text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.5em] text-violet-400/90">
          fairyrealm.xyz
        </p>

        <h1 className="animate-float text-6xl font-black tracking-tight sm:text-8xl">
          <span className="text-shimmer">Fairyrealm</span>
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400 sm:text-xl">
          迷雾彼端的技术领地 — 在二级星域中试验、锻造，直至寻得属于你的叙事。
        </p>

        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://hub.fairyrealm.xyz"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-10 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,0.45)] transition hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(167,139,250,0.55)]"
          >
            <span className="relative z-10">进入星图 hub.fairyrealm.xyz</span>
          </a>
          <Link
            href="#realms"
            className="rounded-full border border-violet-500/30 px-8 py-3.5 text-sm text-violet-200/90 backdrop-blur-sm transition hover:border-violet-400/60 hover:bg-violet-950/30"
          >
            探索领域
          </Link>
        </div>

        <section
          id="realms"
          className="mt-28 grid w-full max-w-3xl gap-4 sm:grid-cols-3"
        >
          {[
            { label: "Auth", sub: "auth", desc: "统一法阵" },
            { label: "Blog", sub: "blog", desc: "记述卷轴" },
            { label: "AI", sub: "ai", desc: "奥术工坊" },
          ].map((r) => (
            <a
              key={r.sub}
              href={
                r.sub === "ai"
                  ? "#"
                  : `https://${r.sub}.fairyrealm.xyz`
              }
              className="rounded-2xl border border-violet-900/40 bg-zinc-950/60 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-900/30"
            >
              <p className="font-mono text-xs text-violet-400">
                {r.sub}.fairyrealm.xyz
              </p>
              <p className="mt-2 text-lg font-semibold text-zinc-100">
                {r.label}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{r.desc}</p>
            </a>
          ))}
        </section>

        <p className="mt-20 font-mono text-[10px] tracking-widest text-zinc-600">
          BUILT ON CLOUDFLARE · NEXT.JS · OPEN REALM
        </p>
      </div>
    </main>
  );
}
