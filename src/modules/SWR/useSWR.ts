import { default as _useSWR } from 'swr';
import { SWRHook } from './types';
import { fetcher } from './constants';

export const useSWR: SWRHook = (key, config) => _useSWR(key, fetcher, config);
