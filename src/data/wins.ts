export const wins = [
    {
        title: "User Story Mapping Workshops",
        context: "Introduced practical workshops across multiple teams.",
        impact: "Created shared product understanding, reducing rework.",
        tags: ["Leadership", "Product"],
    },
    {
        title: "Quality Metrics Program",
        context: "Led quality engineers to define KPIs for releases.",
        impact: "Reduced production bugs by 40% in one year.",
        tags: ["Quality", "Delivery"],
    },
]as const;

export type Win = (typeof wins)[number];