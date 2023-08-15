export const useOptions = (options = {} as any) => {
  const {
    public: { baseURL },
  } = useRuntimeConfig();

  return {
    method: "GET",
    baseURL,
    headers: {
      // Config default header
    },
    ...options,
  };
};

export function useApi<T>(url: string, options = {}) {
  return useFetch<T>(url, useOptions(options));
}
