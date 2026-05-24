import "./globals.css";

export const metadata = {
  title: "Cyber Detective Challenge",
  description: "3 Days Cyber Bootcamp Quiz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
