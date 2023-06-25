import { QueryClient, QueryClientProvider } from "react-query";
import type { AppProps } from "next/app";
import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";

function Home({ Component, pageProps}: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default Home;