import { profile } from "@/data/profile";

export function Hero() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">{profile.name}</h1>
            <p className="mt-3 text-xl text-zinc-600">
                {profile.role} — {profile.tagline}
            </p>
            <div className="mt-6 flex justify-center gap-4">
                <a href={profile.socials.linkedin} className="px-4 py-2 border rounded-xl">
                    LinkedIn
                </a>
                <a href={profile.socials.github} className="px-4 py-2 border rounded-xl">
                    GitHub
                </a>
                <a href={profile.socials.email} className="px-4 py-2 border rounded-xl">
                    Contact
                </a>
            </div>
        </section>
    );
}