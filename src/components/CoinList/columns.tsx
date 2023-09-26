import { ColumnDef } from "@tanstack/react-table";

export type Coin = {
  id: string;
  name: string;
  current_price: number;
  // email: string;
  // website: string
};

export const columns: ColumnDef<Coin>[] = [
  {
    accessorKey: "id",
    header: "User ID",
  },
  {
    accessorKey: "name",
    header: "First Name",
  },
  {
    accessorKey: "current_price",
    header: "Last Name",
  },
  // {
  //   accessorKey: "email",
  //   header: "Email",
  // },
  // {
  //   accessorKey: "website",
  //   header: "Website",
  // },
];
