import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voting Wars",
  description: "Voice your Preference!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
