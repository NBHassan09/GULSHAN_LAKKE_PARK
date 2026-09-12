import "./globals.css";

export const metadata = {
  title: "Gulshan Lake Park — Better Site Planning for a Greener Dhaka",
  description:
    "A low-carbon, climate-responsive redesign of Gulshan Lake Park by students of the Department of Urban and Regional Planning, BUET.",
  openGraph: {
    title: "Gulshan Lake Park — Greener Future of Dhaka",
    description:
      "A site-responsive proposal that activates the lake edge while preserving the park's blue-green structure.",
    images: ["/assets/hero-park.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
