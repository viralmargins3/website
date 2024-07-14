import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StudentWhereInput = {
  id?: StringFilter;
  department?: StringNullableFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
};
