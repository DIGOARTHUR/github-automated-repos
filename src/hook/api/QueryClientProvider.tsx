import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Cache válido por 5 minutos
      refetchOnWindowFocus: false, // Não refetch quando o foco retorna
    
    },
  },
});

interface Props {
  children: React.ReactNode;
}

export const ReactQueryProvider: React.FC<Props> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);
