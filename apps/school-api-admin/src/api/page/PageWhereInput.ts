import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PageWhereInput = {
  id?: StringFilter;
  typeField?: "Option1";
  content?: StringNullableFilter;
  image?: JsonFilter;
};
