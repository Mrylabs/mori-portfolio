export type Work = {
  title: string;
  category: string;
  year?: string;
  description: string;
  image: string;
  featured?: boolean;
  audioSrc?: string;
  externalUrl?: string;
  archiveItems?: string[];
};

export const works: Work[] = [
  {
    title: "Offline",
    category: "Single",
    description:
      "Written during the Iranian internet blackout, Offline reflects on distance, uncertainty, and the feeling of being unable to reach the people who matter most.",
    image: "/images/works/offline-cover.webp",
    featured: true,
    audioSrc: "/audio/offline.mp3",
    archiveItems: [
      "DISTANCE",
      "ABSENCE",
      "CONNECTION",
    ],
  },
  {
    title: "Dark",
    category: "Single",
    description:
      "A meditation on shadow, stillness, and emotional tension, Dark lingers in the space between presence and absence.",
    image: "/images/works/dark-cover.jpg",
    featured: true,
    audioSrc: "/audio/dark-in-the-woods.mp3",
    archiveItems: [
      "SHADOW",
      "STILLNESS",
      "TENSION",
    ],
  },
  {
    title: "Forgotten",
    category: "Single",
    description:
      "Centered on women, memory, and collective experience, Forgotten explores what remains when stories are forgotten, erased, or left untold.",
    image: "/images/works/forgotten-cover.jpg",
    featured: true,
    audioSrc: "/audio/forgotten.mp3",
    archiveItems: [
      "MEMORY",
      "WOMEN",
      "ERASURE",
    ],
  },
  {
    title: "Nomade auf Zeit – Trailer",
    category: "Trailer",
    description:
      "A score fragment for drifting landscapes, carrying movement, uncertainty, and the ache of belonging briefly to places already passing.",
    image: "/images/hero/vienna-blue-hour.webp",
    archiveItems: [
      "Transit Mood Board",
      "Border-Crossing Cue Pages",
      "Window Light References",
    ],
  },
  {
    title: "Chi Begam (Mori Remix)",
    category: "Remix",
    description:
      "A familiar song enters a darker room, reshaped through echo, tension, and the narrative pull of another emotional weather.",
    image: "/images/hero/vienna-blue-hour.webp",
    archiveItems: [
      "Borrowed Melody Margins",
      "Echo Chamber Pages",
      "Reframed Memory Cards",
    ],
  },
];
