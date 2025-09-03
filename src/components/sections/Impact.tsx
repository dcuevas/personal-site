// src/components/sections/Impact.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Win } from "@/data/wins";

export default function Impact({ wins }: { wins: readonly Win[] }) {
    return (
        <section>
            <h2 className="text-2xl font-semibold">Impacto seleccionado</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {wins.map((w, i) => (
                    <Card key={i} className="rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-lg">{w.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm text-zinc-700">{w.context}</p>
                            <p className="text-sm font-medium">{w.impact}</p>
                            <div className="flex flex-wrap gap-2">
                                {w.tags.map((t) => (
                                    <Badge key={t} variant="secondary">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}