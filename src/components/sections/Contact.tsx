// src/components/sections/Contact.tsx
export default function Contact({ email }: { email: string }) {
    const visible = email.replace(/^mailto:/, "");
    return (
        <section id="contact">
            <h2 className="text-2xl font-semibold">Get in touch</h2>
            <p className="mt-4 text-zinc-700">
                Looking to raise the quality and delivery of your teams? Write me at{" "}
                <a className="underline" href={email}>
                    {visible}
                </a>{" "}
                or connect with me on LinkedIn.
            </p>
        </section>
    );
}