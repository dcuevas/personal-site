export default function Contact({ email, linkedin }: { email: string; linkedin: string }) {
    const visible = email.replace(/^mailto:/, "");
    return (
        <section id="contact">
            <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
            <p className="text-muted-foreground leading-relaxed">
                Looking to raise the quality and delivery of your teams? Write me at{" "}
                <a
                    className="underline hover:text-foreground transition-colors"
                    href={`mailto:${visible}`}
                >
                    {visible}
                </a>{" "}
                or connect with me on <a href={linkedin} target="_blank" rel="noreferrer" className="underline hover:text-foreground transition-colors">
                LinkedIn</a>.
            </p>
        </section>
    );
}