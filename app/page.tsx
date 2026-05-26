import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-950/40 via-zinc-950 to-zinc-950" />
      <div className="relative z-10 max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">fairyrealm.xyz</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl">
          Fairyrealm
        </h1>
        <p className="mt-6 text-lg text-zinc-400">
          技术实验领地 — 用不同二级域名探索方向，再决定未来的主题。
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://hub.fairyrealm.xyz"
            className="rounded-full bg-violet-600 px-8 py-3 font-medium text-white shadow-lg shadow-violet-900/30 hover:bg-violet-500"
          >
            进入实验导航 hub.fairyrealm.xyz →
          </a>
          <a
            href="https://auth.fairyrealm.xyz"
            className="rounded-full border border-zinc-700 px-8 py-3 text-sm text-zinc-300 hover:border-violet-700 hover:text-violet-200"
          >
            登录
          </a>
        </div>
        <p className="mt-16 font-mono text-xs text-zinc-600">
          blog · ai · auth · hub — 子域实验架构
        </p>
      </div>
    </main>
  );
}
