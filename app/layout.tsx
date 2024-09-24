import { Toaster } from "sonner";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provicer";
import { EdgeStoreProvider } from "@/lib/edgestore";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Weekly - Documentação para Devs",
  description: "Documentação para Desenolvedores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#191919]`}
      >
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="notes-theme"
            >
            <ModalProvider />
            <Toaster position="bottom-center" />
            {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
