import "./globals.css";

export const metadata = {
  title: "Designing Better Parks for Dhaka — Evidence from Gulshan Lake Park",
  description:
    "A research-led case study using Gulshan Lake Park to develop practical principles for healthier, more inclusive and climate-responsive neighbourhood parks across Dhaka.",
  openGraph: {
    title: "Designing Better Parks for Dhaka — Evidence from Gulshan Lake Park",
    description:
      "From field evidence to a transferable Dhaka Park Improvement Framework: climate comfort, access, blue-green performance, inclusion, flexibility and management.",
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
