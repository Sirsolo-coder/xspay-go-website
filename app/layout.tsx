
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xspay-go.vercel.app"),
  title: {
    default: "XSPay-Go | Your Digital Payment Companion",
    template: "%s | XSPay-Go",
  },
  description:
    "Discover XSPay-Go, a digital wallet and financial services platform being developed by Technovate Global Solutions Limited.",
  applicationName: "XSPay-Go",
  keywords: [
    "XSPay-Go",
    "digital wallet",
    "gift cards",
    "fintech",
    "Technovate Global Solutions",
    "Nigeria",
  ],
  openGraph: {
    title: "XSPay-Go | Your Digital Payment Companion",
    description:
      "A digital payment and wallet platform being developed by Technovate Global Solutions Limited.",
    type: "website",
    locale: "en_NG",
    siteName: "XSPay-Go",
  },
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
