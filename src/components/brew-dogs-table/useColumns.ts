import { QTableProps } from "quasar";

export const useColumns = () => {
  const columns: QTableProps["columns"] = [
    {
      name: "name",
      label: "Name",
      align: "left",
      field: "name",
    },
    {
      name: "tagline",
      label: "Tagline",
      align: "left",
      field: "tagline",
    },
    {
      name: "description",
      label: "Description",
      align: "left",
      field: "description",
    },
    {
      name: "image_url",
      label: "Image",
      align: "left",
      field: "image_url",
    },
    {
      name: "abv",
      label: "ABV",
      align: "left",
      field: "abv",
      sortable: true,
    },
    {
      name: "ibu",
      label: "IBU",
      align: "left",
      field: "ibu",
    },
    {
      name: "lactose",
      label: "Lactose",
      align: "left",
      field: "lactose",
    },
  ];

  return { columns };
};
