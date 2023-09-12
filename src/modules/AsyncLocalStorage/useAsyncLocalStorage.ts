import { useSWR } from '@modules/SWR';

export const useAsyncLocalStorage = () => {
    return useSWR('/api/local-store');
};
