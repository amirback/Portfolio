import Image from "next/image";

import { getPhoto } from "@/content/photos";

const ASPECT: Record<string, string> = {
  "4:5": "4 / 5",
  "3:2": "3 / 2",
};

export function Photo({ id, className }: { id: string; className?: string }) {
  const photo = getPhoto(id);
  const style = { aspectRatio: ASPECT[photo.ratio] };

  if (!photo.src) {
    return (
      <div className={["placeholder", className].filter(Boolean).join(" ")} style={style} aria-hidden="true">
        <span>PHOTO: {photo.caption}</span>
      </div>
    );
  }

  return (
    <div className={["relative overflow-hidden", className].filter(Boolean).join(" ")} style={style}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 700px) 100vw, 660px"
        className="object-cover"
      />
    </div>
  );
}

/** One or two photo slots. Two sit side by side above 560px and stack below it. */
export function Photos({ ids, className }: { ids: string[]; className?: string }) {
  if (ids.length === 0) return null;

  return (
    <div
      className={[
        "grid gap-3",
        ids.length > 1 ? "min-[560px]:grid-cols-2" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {ids.map((id) => (
        <Photo key={id} id={id} />
      ))}
    </div>
  );
}
