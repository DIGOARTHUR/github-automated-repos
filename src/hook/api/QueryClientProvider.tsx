import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
            refetchOnWindowFocus: false,
        },
    },
});

interface IPropsReactQueryProvider {
    children: React.ReactNode;
}

export function ReactQueryProvider({ children }: IPropsReactQueryProvider): JSX.Element {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
