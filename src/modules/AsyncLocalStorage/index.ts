import { asyncLocalStorage } from '@nextwrappers/async-local-storage';
import { defaultLocalStore } from './constants';

export const { wrapper: withLocalStorage, getStore: getLocalStorage } = asyncLocalStorage({
    initialize: (req) => defaultLocalStore,
});
