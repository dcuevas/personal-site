// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import Contact from "@/components/sections/Contact";
import { profile } from "@/data/profile";
import { wins } from "@/data/wins";
import { SpeedInsights } from "@vercel/speed-insights/next";


export default function Page() {
    return (
        <div
            className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
            <main className="row-start-2 w-full max-w-5xl space-y-12">
                <Hero profile={profile}/>
                <Impact wins={wins}/>
                <section>
                    <h2 className="text-2xl font-semibold">About Me</h2>
                    <p className="mt-4 text-zinc-700 leading-relaxed">
                        I’m an Engineering Leader focused on building resilient teams with strong
                        engineering standards and a culture of quality. I move comfortably between
                        strategy and delivery: translating business goals into executable roadmaps and
                        developing people so they can shine. I like to measure in order to improve
                        (flow, quality, value) and reduce daily friction through best practices,
                        automation, and clarity.
                    </p>
                </section>
                <Contact email={profile.links.email!}/>
            </main>
            <footer className="row-start-3 mt-12 text-sm text-zinc-500">
                © {new Date().getFullYear()} {profile.name}
            </footer>
            <SpeedInsights /> # Vercel stats
        </div>
    );
}