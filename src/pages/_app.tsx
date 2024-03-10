import { LogsContext } from "@/contexts/useLogs";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ClerkProvider } from "@clerk/nextjs";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <QueryClientProvider client={queryClient}>
        <LogsContext>
          <Component {...pageProps} />
        </LogsContext>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
