import { Admin as TAdmin } from "../api/admin/Admin";

export const ADMIN_TITLE_FIELD = "email";

export const AdminTitle = (record: TAdmin): string => {
  return record.email?.toString() || String(record.id);
};
