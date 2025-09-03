import { wins } from "@/data/wins";

export function Impact() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-2xl font-semibold text-center">Selected Impact</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {wins.map((w, i) => (
                    <article key={i} className="border rounded-2xl p-5">
                        <h3 className="text-lg font-medium">{w.title}</h3>
                        <p className="mt-2 text-sm text-zinc-700">{w.context}</p>
                        <p className="mt-2 text-sm font-medium text-zinc-900">{w.impact}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {w.tags.map((t) => (
                                <span key={t} className="text-xs border rounded-full px-2 py-1">{t}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}