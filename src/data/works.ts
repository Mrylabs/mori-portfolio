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
      "Temporary note for a single shaped around disconnection and quiet pressure.",
    image: "/images/works/offline-cover.png",
    featured: true,
    audioSrc: "/audio/Offline.wav",
    archiveItems: [
      "Disconnected Sketches",
      "Late Mix Notes",
      "Muted Visual References",
    ],
  },
  {
    title: "Dark",
    category: "Single",
    description:
      "Temporary note for a single with a shadowed, cinematic atmosphere.",
    image: "/images/works/dark-cover.png",
    featured: true,
    audioSrc: "/audio/Dark.wav",
    archiveItems: [
      "Low-Light References",
      "Bass Texture Tests",
      "Night Session Notes",
    ],
  },
  {
    title: "Forgotten",
    category: "Single",
    description:
      "Temporary note for a single centered on memory, distance, and residue.",
    image: "/images/works/forgotten-cover.jpeg",
    featured: true,
    audioSrc: "/audio/forgotten.mp3",
    archiveItems: ["Memory Fragments", "Vocal Drafts", "Faded Image Studies"],
  },
  {
    title: "Nomade auf Zeit – Trailer",
    category: "Trailer",
    description:
      "Temporary note for trailer music built around movement and unsettled place.",
    image: "/images/hero/vienna-blue-hour.png",
    archiveItems: ["Cue Map", "Travel Textures", "Scene Timing Notes"],
  },
  {
    title: "Chi Begam (Mori Remix)",
    category: "Remix",
    description:
      "Temporary note for a remix reworked through Mori's darker sound palette.",
    image: "/images/hero/vienna-blue-hour.png",
    archiveItems: ["Stem Notes", "Rhythm Experiments", "Remix Arrangement Drafts"],
  },
];
