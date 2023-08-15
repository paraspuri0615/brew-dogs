import { UseGetBeersResItem, useGetBeers } from "~/apis";

type Row = UseGetBeersResItem & {
  lactose: {
    value: number;
    unit: string;
  };
  dryHop: {
    value: number;
    unit: string;
  };
};

export const useRows = async () => {
  const rows = ref<Row[]>([]);
  const loading = ref(false);

  try {
    loading.value = true;

    const { data } = await useGetBeers({ brewed_after: "11-2012" });

    if (data.value) {
      const rowsValue = data.value.map((item) => {
        const lactose = {
          value: 0,
          unit: "",
        };

        const dryHop = {
          value: 0,
          unit: "",
        };

        const itemLactose = item.ingredients.hops.find(
          (hop) => hop.name === "Lactose"
        );

        if (itemLactose && itemLactose.amount.value > 0) {
          lactose.value = itemLactose.amount.value;
          lactose.unit = itemLactose.amount.unit;
        }

        const itemDryHop = item.ingredients.hops.find(
          (hop) => hop.add === "dry hop"
        );

        if (itemDryHop && itemDryHop.amount.value > 0) {
          dryHop.value = itemDryHop.amount.value;
          dryHop.unit = itemDryHop.amount.unit;
        }

        return { ...item, lactose, dryHop };
      });

      rows.value = rowsValue;
    }
  } catch (err) {
    console.error("Error at getting beers: ", err);
  } finally {
    loading.value = false;
  }

  return { rows, loading };
};
