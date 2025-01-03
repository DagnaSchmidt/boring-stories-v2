import Nav from "@/components/nav/Nav";
import { StoreProvider } from "./StoreProvider";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-obsidian text-pale px-4 pt-2 pb-10 lg:px-20 flex flex-col h-dvh scrollbar-hide">
        <StoreProvider>
          <Nav />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
};
