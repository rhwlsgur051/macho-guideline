import type { Metadata, Viewport } from "next";
import "./globals.css";
import { MainLayout } from "@/layout/main-layout";

export const metadata: Metadata = {
  title: "마초 가이드라인",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // 사용자 확대/축소 비활성화
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`antialiased`}
    >
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
