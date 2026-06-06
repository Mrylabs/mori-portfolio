export type Work = {
  title: string;
  category: string;
  year?: string;
  description: string;
  image?: string;
  featured?: boolean;
  audioSrc?: string;
  externalUrl?: string;
  actionLabel?: string;
  tags?: string[];
};

export const works: Work[] = [
  {
    title: "Nomade auf Zeit",
    category: "Documentary / Trailer",
    year: "2026",
    description:
      "A score fragment for drifting landscapes, carrying movement, uncertainty, and the ache of belonging briefly to places already passing.",
    image: "/images/works/nomade-cover.jpeg",
    featured: true,
    externalUrl: "https://www.youtube.com/watch?v=IhIPtbZVs_E",
    actionLabel: "Watch Trailer",
    tags: ["TRANSIT", "LANDSCAPE", "BELONGING"],
  },
  {
    title: "What Moves You",
    category: "Collaboration",
    year: "2026",
    description:
      "A collaborative performance work shaped by movement, listening, and the shared pulse between sound, body, and presence.",
    image: "/images/works/what-moves-you-cover.webp",
    featured: true,
    externalUrl: "https://www.youtube.com/watch?v=rkeWDwbll80",
    actionLabel: "Watch Performance",
    tags: ["MOVEMENT", "COLLABORATION", "PERFORMANCE"],
  },
  {
    title: "Yek Dast Seda Nadarad",
    category: "Installation",
    year: "2025",
    description:
      "An installation work shaped around collective voice, silence, and the fragile power of becoming audible together.",
    image: "/images/works/yek-dast-cover.jpg",
    featured: true,
    externalUrl: "https://www.youtube.com/watch?v=KeJy4kgYpMk",
    actionLabel: "View Installation",
    tags: ["VOICE", "COLLECTIVE", "PRESENCE"],
  },
  {
    title: "Forgotten",
    category: "Single",
    year: "2024",
    description:
      "Centered on women, memory, and collective experience, Forgotten explores what remains when stories are forgotten, erased, or left untold.",
    image: "/images/works/forgotten-cover.jpg",
    featured: false,
    tags: ["MEMORY", "WOMEN", "ERASURE"],
  },
  {
    title: "Chi Begam (Mori Remix)",
    category: "Remix",
    year: "2024",
    description:
      "A familiar song enters a darker room, reshaped through echo, tension, and the narrative pull of another emotional weather.",
    image: "/images/works/chi-begam-cover.webp",
    featured: false,
    externalUrl: "https://www.youtube.com/watch?v=xJ1EGF5ik14",
    actionLabel: "Watch Video",
    tags: ["REMIX", "ECHO", "MEMORY"],
  },
  {
    title: "Dark",
    category: "Single",
    year: "2024",
    description:
      "A meditation on shadow, stillness, and emotional tension, Dark lingers in the space between presence and absence.",
    image: "/images/works/dark-cover.webp",
    featured: false,
    tags: ["SHADOW", "STILLNESS", "TENSION"],
  },
  {
    title: "Moon's Nightingale",
    category: "Performance",
    year: "2023",
    description:
      "A live performance with another player, drawing from Persian storytelling and the image of the nightingale as a voice of longing, memory, and return.",
    image: "/images/works/moons-nightingale-cover.webp",
    featured: false,
    externalUrl: "https://www.youtube.com/watch?v=NeqYBvV8Pas",
    actionLabel: "Watch Performance",
    tags: ["VOICE", "DUET", "TRADITIONAL"],
  },
];
