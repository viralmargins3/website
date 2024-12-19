import { SortOrder } from "../../util/SortOrder";

export type PageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  content?: SortOrder;
  image?: SortOrder;
};
