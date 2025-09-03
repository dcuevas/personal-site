export const profile = {
    name: "Darío Cuevas",
    role: "Engineering Leader",
    tagline: "I help teams deliver with quality and purpose.",
    location: "Málaga, Spain",
    links: {
        linkedin: "https://www.linkedin.com/in/dariocuevas/",
        github: "https://github.com/dcuevas",
        email: "mailto:dario.cuevas@gmail.com",
    },
    avatarSrc: "/avatar.png",
    avatarFallback: "DC",
} as const;

export type Profile = typeof profile;