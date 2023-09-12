export const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((r) => r.json());
