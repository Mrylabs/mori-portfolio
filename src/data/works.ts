export type Work = {
  title: string;
  category: string;
  year?: string;
  description: string;
  archiveItems?: string[];
};

export const works: Work[] = [
  {
    title: "Nocturne Study",
    category: "Music",
    description:
      "A selected music work with space for cover imagery, credits, and short editorial context.",
    archiveItems: ["Light Tests", "Frame Grabs"],
  },
  {
    title: "Still Frame Sequence",
    category: "Music",
    description:
      "A selected music work with visual fragments, process notes, and atmospheric references.",
    archiveItems: ["Location Notes", "Material References"],
  },
  {
    title: "Threshold",
    category: "Music",
    description:
      "A selected music work shaped through sound, memory, and cinematic visual language.",
    archiveItems: ["Process Fragments"],
  },
  {
    title: "Rooms Without Weather",
    category: "Music",
    description:
      "A selected music work reserved for imagery, credits, and emotional context.",
    archiveItems: ["Quiet Errors"],
  },
  {
    title: "Film Music / Score",
    category: "Film Music",
    description:
      "A composition or scoring work connected to moving image, atmosphere, and narrative.",
    archiveItems: ["Cue Notes", "Scene References"],
  },
];