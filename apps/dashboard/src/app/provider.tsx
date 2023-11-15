"use client";

import type { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "ui/components/ui/theme-provider";

const queryClient = new QueryClient();

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
