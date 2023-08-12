import { QueryClient, QueryClientProvider as BaseQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';

export const QueryClientProvider = (props: React.PropsWithChildren<unknown>) => {
  const { children } = props;
  const [queryClient] = useState(() => new QueryClient());

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
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
