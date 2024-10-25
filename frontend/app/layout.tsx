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
        className="bg-obsidian">
        <StoreProvider>
          <Nav />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
};
