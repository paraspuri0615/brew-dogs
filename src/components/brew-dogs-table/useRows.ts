import { UseGetBeersRes, useGetBeers } from "~/apis";

export const useRows = async () => {
  const rows = ref<UseGetBeersRes>([]);
  const loading = ref(false);

  try {
    loading.value = true;

    const { data } = await useGetBeers({ brewed_after: "11-2012" });

    if (data.value) {
      rows.value = data.value;
    }
  } catch (err) {
    console.error("Error at getting beers: ", err);
  } finally {
    loading.value = false;
  }

  return { rows, loading };
};
