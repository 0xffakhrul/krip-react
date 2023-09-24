import { ColumnDef } from "@tanstack/react-table";

export type Coin = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
};

export const columns: ColumnDef<Coin>[] = [
  {
    accessorKey: "id",
    header: "User ID",
  },
  {
    accessorKey: "firstname",
    header: "First Name",
  },
  {
    accessorKey: "lastname",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];
