import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Profile } from "@/data/profile";

export default function Hero({ profile }: { profile: Profile }) {
    return (
        <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
                <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Engineering Leader</Badge>
                    <Badge variant="outline">15+ years</Badge>
                    <Badge variant="outline">User Story Mapping Expert</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    {profile.name}
                </h1>
                <p className="mt-3 text-lg md:text-xl text-muted-foreground">
                    {profile.role} — {profile.tagline}
                </p>
                {profile.location && (
                    <p className="mt-1 text-sm text-muted-foreground">{profile.location}</p>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                    {profile.links.linkedin && (
                        <Button asChild>
                            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>
                        </Button>
                    )}
                    {profile.links.github && (
                        <Button variant="outline" asChild>
                            <a href={profile.links.github} target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        </Button>
                    )}
                    {profile.links.email && (
                        <Button variant="outline" asChild>
                            <a href={`mailto:${profile.links.email}`}>Contacto</a>
                        </Button>
                    )}
                </div>
            </div>

            <Avatar className="w-28 h-28 md:w-32 md:h-32">
                <AvatarImage src={profile.avatarSrc ?? "/avatar.jpg"} alt="Foto de perfil" />
                <AvatarFallback>{profile.avatarFallback ?? "DC"}</AvatarFallback>
            </Avatar>
        </section>
    );
}
