import { QTableProps } from "quasar";

export const useColumns = () => {
  const columns: QTableProps["columns"] = [
    {
      name: "name",
      label: "Name",
      align: "left",
      field: "name",
    },
  ];

  return { columns };
};
