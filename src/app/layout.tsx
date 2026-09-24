import type { Metadata } from "next";
import "@/styles/globals.css";

const siteUrl = "https://tuan.thich.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tuan Nguyen",
    template: "%s | Tuan Nguyen",
  },
  description: "Product builder and developer.",
  applicationName: "Tuan Nguyen",
  authors: [{ name: "Tuan Nguyen", url: siteUrl }],
  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Tuan Nguyen",
    title: "Tuan Nguyen",
    description: "Product builder and developer.",
    locale: "vi_VN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tuan Nguyen - Product builder and developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tuan Nguyen",
    description: "Product builder and developer.",
    images: ["/og.png"],
    creator: "@nguyentuan1696",
  },

  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="app-shell">{children}</main>
      </body>
    </html>
  );
}
