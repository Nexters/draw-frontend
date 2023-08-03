import { QueryClient, QueryClientProvider as BaseQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import React from 'react';

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  queryClient.setDefaultOptions({
    mutations: {
      retry: false,
      onError: () => {
        //TODO
      },
    },
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      onError: () => {
        //TODO
      },
    },
  });

  return (
    <BaseQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </BaseQueryClientProvider>
  );
};

export { queryClient, QueryClientProvider };
