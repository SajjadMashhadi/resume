"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { ReactNode } from "react";

interface ThemeProviderPropsExtended {
  children: ReactNode;
  attribute: string;
  defaultTheme: string;
  enableSystem: boolean;
}

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderPropsExtended): JSX.Element {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
