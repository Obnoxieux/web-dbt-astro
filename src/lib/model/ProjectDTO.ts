import type { CollectionEntry } from "astro:content";

export interface ProjectDTO {
  id: string;
  name: string;
  description: string;
  languages: { id: string }[];
}

export function projectCollectionToDTO(coll: CollectionEntry<"projects">): ProjectDTO {
  return {
    id: coll.id,
    name: coll.data.name,
    description: coll.data.description,
    languages: coll.data.languages
  }
}