import { M_PLUS_2 } from "next/font/google";
import "./globals.css";

const mPlus2 = M_PLUS_2({
  subsets: ["latin"],
  variable: "--font-m-plus-2",
});

export const metadata = {
  title: "Portfolio_1",
  description: "テニススクール",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${mPlus2.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
