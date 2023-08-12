import { QueryClient, QueryClientProvider as BaseQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';
import { useApiError } from './utils/useApiError';

export const QueryClientProvider = (props: React.PropsWithChildren<unknown>) => {
  const { children } = props;
  const [queryClient] = useState(() => new QueryClient());
  const handleError = useApiError();

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
      onError: (e) => handleError(e),
    },
  });

  return (
    <BaseQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </BaseQueryClientProvider>
  );
};
