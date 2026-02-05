export const metadata = {
  title: "Apex Copilot",
  description: "The intelligence layer for modern driving."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
