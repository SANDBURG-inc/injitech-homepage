import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import ChannelTalk from "@/components/common/ChannelTalk";

export const metadata: Metadata = {
  title: "인지테크 | 글로벌 제품과 솔루션",
  description: "고객 성공 IT 파트너, 인지테크",
  icons: {
    icon: "/favicon16.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <LanguageProvider>
          {children}
          <ChannelTalk />
        </LanguageProvider>
      </body>
    </html>
  );
}
