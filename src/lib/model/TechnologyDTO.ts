import type { CollectionEntry } from "astro:content";

export type TechnologyDTO = {
  id: string;
  src: string;
  name: string;
};

export function createTechnologyDTO(
  coll: CollectionEntry<"frameworks" | "languages">,
): TechnologyDTO {
  return {
    id: coll.id,
    src: coll.data.icon.src,
    name: coll.data.name,
  };
}
