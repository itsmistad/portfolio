import { LocalStore } from '@/modules/AsyncLocalStorage/types';
import { getLocalStorage, withLocalStorage } from '@modules/AsyncLocalStorage';
import { NextRequest, NextResponse } from 'next/server';

export const GET = withLocalStorage<
    { params?: unknown },
    NextRequest,
    NextResponse<LocalStore | undefined>
>(() => {
    const storageValue = getLocalStorage();

    return NextResponse.json(storageValue);
});
