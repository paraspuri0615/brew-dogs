import { QTableProps } from "quasar";

export const useColumns = () => {
  const columns: QTableProps["columns"] = [
    {
      name: "image_url",
      label: "Image",
      align: "left",
      field: "image_url",
    },
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
      name: "lactose",
      label: "Lactose",
      align: "left",
      field: "lactose",
    },
    {
      name: "dryHop",
      label: "Dry Hop",
      align: "left",
      field: "dryHop",
    },
    {
      name: "description",
      label: "Description",
      align: "left",
      field: "description",
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
  ];

  return { columns };
};
