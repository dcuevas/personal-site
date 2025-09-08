// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import Contact from "@/components/sections/Contact";
import { profile } from "@/data/profile";
import { wins } from "@/data/wins";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function Page() {
    return (
        <div className="min-h-screen p-8 pb-20 sm:p-20">
            <main className="max-w-5xl mx-auto space-y-12">
                <Hero profile={profile}/>
                <Impact wins={wins}/>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            About Me
                            <Badge variant="secondary">Engineering Leader</Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                            I&#39;m an Engineering Leader focused on building resilient teams with strong
                            engineering standards and a culture of quality. I move comfortably between
                            strategy and delivery: translating business goals into executable roadmaps and
                            developing people so they can shine.
                        </p>
                    </CardContent>
                </Card>

                <Contact email={profile.links.email!} linkedin={profile.links.linkedin!} />
            </main>

            <footer className="mt-12 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} {profile.name}
            </footer>
            <SpeedInsights />
        </div>
    );
}