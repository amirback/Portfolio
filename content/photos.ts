/**
 * Every image on the site lives here and nowhere else.
 *
 * To publish a real photo: drop the file into /public/photos and set `src`
 * to its path, e.g. src: "/photos/portrait.jpg". While `src` is null the
 * slot renders as a grey placeholder carrying its caption.
 *
 * ratio: "4:5" for the hero portrait, "3:2" for everything else.
 */

export type PhotoRatio = "4:5" | "3:2";

export type Photo = {
  id: string;
  /** Path under /public, or null while the slot is still empty. */
  src: string | null;
  /** Written for the finished photo — used as alt text once src is set. */
  alt: string;
  /** Shown inside the placeholder. */
  caption: string;
  ratio: PhotoRatio;
};

export const photos: Photo[] = [
  { id: "portrait", src: null, alt: "Amirkhan Panaguzhiyev", caption: "портрет", ratio: "4:5" },

  { id: "aksay", src: null, alt: "Aksay, West Kazakhstan", caption: "Аксай", ratio: "3:2" },
  { id: "flood-2024", src: null, alt: "The spring 2024 floods in the West Kazakhstan region", caption: "паводок 2024 в ЗКО", ratio: "3:2" },

  { id: "peak-interface", src: null, alt: "The Peak interface", caption: "интерфейс", ratio: "3:2" },
  { id: "peak-classroom", src: null, alt: "A class working in Peak", caption: "класс за работой", ratio: "3:2" },

  { id: "tasqyn-map", src: null, alt: "The Tasqyn map of resident reports", caption: "карта", ratio: "3:2" },
  { id: "tasqyn-work", src: null, alt: "Working on Tasqyn", caption: "работа над проектом", ratio: "3:2" },

  { id: "brain-map", src: null, alt: "The Brain map of topics", caption: "карта знаний", ratio: "3:2" },
  { id: "brain-students", src: null, alt: "Students preparing with Brain", caption: "ученики", ratio: "3:2" },

  { id: "horsteppe-interface", src: null, alt: "The Horsteppe interface", caption: "интерфейс", ratio: "3:2" },
  { id: "horsteppe-frame", src: null, alt: "A frame from a film made with Horsteppe", caption: "кадр", ratio: "3:2" },

  { id: "sundial-render", src: null, alt: "The Namaz Sundial render", caption: "рендер", ratio: "3:2" },
  { id: "sundial-shadow", src: null, alt: "The shadow falling across the dial", caption: "тень на циферблате", ratio: "3:2" },

  { id: "hackathon-team", src: null, alt: "The team at a hackathon", caption: "команда", ratio: "3:2" },
  { id: "hackathon-award", src: null, alt: "The award ceremony", caption: "награждение", ratio: "3:2" },

  { id: "robotics-club", src: null, alt: "The robotics club", caption: "клуб", ratio: "3:2" },
  { id: "robotics-competition", src: null, alt: "A robotics competition", caption: "соревнование", ratio: "3:2" },

  { id: "teaching-lesson", src: null, alt: "Teaching a lesson", caption: "занятие", ratio: "3:2" },

  { id: "dombra-performance", src: null, alt: "Performing on the dombra", caption: "выступление", ratio: "3:2" },
  { id: "dombra-diploma", src: null, alt: "A competition diploma", caption: "диплом", ratio: "3:2" },
];

const byId = new Map(photos.map((photo) => [photo.id, photo]));

export function getPhoto(id: string): Photo {
  const photo = byId.get(id);
  if (!photo) throw new Error(`Unknown photo id: ${id}`);
  return photo;
}
