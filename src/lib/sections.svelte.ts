// Shared section state — imported by +page.svelte, Scene.svelte, ScrollScore.svelte

export type Section = {
  id: string;
  title: string;
  sub: string;
  body: string;
  cardSide: "left" | "right" | "none";
};

export const SECTIONS: Section[] = [
  {
    id: "hero",
    title: "wiedenmann.art",
    sub: "musician & artist",
    body: "",
    cardSide: "none",
  },
  {
    id: "about",
    title: "About",
    sub: "musician & artist",
    body: "Composer, performer and artist based in Vienna — exploring the intersection of acoustic music, spatial sound and interdisciplinary practice.",
    cardSide: "right",
  },
  {
    id: "recordings",
    title: "Recordings",
    sub: "listen & explore",
    body: "Drag the score below to scrub through the piece and play it at your own pace.",
    cardSide: "right",
  },
  {
    id: "calendar",
    title: "Calendar",
    sub: "upcoming concerts",
    body: "Stay up to date with upcoming performances, workshops and collaborations. New dates announced regularly.",
    cardSide: "right",
  },
  {
    id: "projects",
    title: "Projects",
    sub: "creative work",
    body: "From NLP-driven composition tools to XR installations — a portfolio of interdisciplinary projects at the boundary of art and technology.",
    cardSide: "right",
  },
  {
    id: "contact",
    title: "Contact",
    sub: "get in touch",
    body: "For bookings, collaborations or general enquiries, reach out via email or social media. Always happy to connect.",
    cardSide: "right",
  },
];

// Camera [position, lookAt target] per section.
// Camera always shifts left — marimba drifts right, card on the right has space.
export const CAMERA_POSES: {
  pos: [number, number, number];
  target: [number, number, number];
}[] = [
  { pos: [0, 1.4, 5.0], target: [0, 0.4, 0] },       // 0 hero — centred
  { pos: [-2.2, 1.2, 4.2], target: [0.6, 0.4, 0] },  // 1 about
  { pos: [-2.0, 1.2, 4.4], target: [0.6, 0.4, 0] },  // 2 recordings
  { pos: [-2.4, 1.0, 4.0], target: [0.6, 0.4, 0] },  // 3 calendar
  { pos: [-2.0, 1.1, 4.2], target: [0.6, 0.4, 0] },  // 4 projects
  { pos: [0, 1.8, 4.5], target: [0, 0.4, 0] },        // 5 contact — centred again
];

export const sectionState = $state({ current: 0 });
