import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Win } from "@/data/wins";

export default function Impact({ wins }: { wins: readonly Win[] }) {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-6">Impacto seleccionado</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {wins.map((w, i) => (
                    <Card key={i} className="rounded-2xl hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-lg">{w.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">{w.context}</p>
                            <p className="text-sm font-medium text-foreground">{w.impact}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {w.tags.map((t) => (
                                    <Badge key={t} variant="secondary" className="text-xs">
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
