import { JsonValue } from "type-fest";

export type Page = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField?: "Option1" | null;
  content: string | null;
  image: JsonValue;
};
