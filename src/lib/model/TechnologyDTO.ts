import type { CollectionEntry } from "astro:content";

export type TechnologyDTO = {
  src: string;
  name: string;
};

export function createTechnologyDTO(
  coll: CollectionEntry<"frameworks" | "languages">,
): TechnologyDTO {
  return {
    src: coll.data.icon.src,
    name: coll.data.name,
  };
}
