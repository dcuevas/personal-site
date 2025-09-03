import { profile } from "@/data/profile";

export function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-3xl px-6 py-20 text-center">
            <h2 className="text-2xl font-semibold">Let’s Connect</h2>
            <p className="mt-2 text-zinc-600">
                Reach out at <a href={profile.socials.email} className="underline">{profile.socials.email}</a>
            </p>
        </section>
    );
}