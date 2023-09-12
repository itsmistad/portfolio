import useSWR from 'swr';

export type SWRHookParameters = Parameters<typeof useSWR> extends [
    infer Key,
    infer Fetcher,
    infer Config,
]
    ? [key: Key, config?: Config]
    : never;

export type SWRHook = (...args: SWRHookParameters) => ReturnType<typeof useSWR>;
