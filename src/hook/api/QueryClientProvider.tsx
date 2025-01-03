import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // Cache válido por 5 minutos
            refetchOnWindowFocus: false, // Não refetch quando o foco retorna
        },
    },
});

interface IPropsReactQueryProvider {
    children: React.ReactNode;
}

export function ReactQueryProvider({ children }: IPropsReactQueryProvider): JSX.Element {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
