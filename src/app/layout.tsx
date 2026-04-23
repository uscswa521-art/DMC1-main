import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DMC加密交易 | 主力思維交易系統 | 比特幣以太幣加密貨幣教學',
  description:
    '加入DMC加密交易社群，學習主力思維交易系統。提供比特幣(BTC)、以太幣(ETH)等加密貨幣日內交易策略、裸K精準判讀、成交量分布分析、盤口核心技巧。完全免費教學，從亂猜行情進化為穩定獲利。',
  keywords: [
    '加密貨幣交易', 'DMC交易系統', '主力思維', '比特幣交易策略',
    '以太幣交易', 'BTC日內交易', '裸K分析', '成交量分布分析',
    '價格行為洞察', '盤口超核心', '加密貨幣教學', '免費交易社群',
    '一目均衡表', '酒田戰法', 'ICT時間', 'Bitunix交易所',
  ],
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    siteName: 'DMC加密交易',
    title: 'DMC加密交易 | 主力思維交易系統',
    description:
      '加入DMC加密交易社群，學習主力思維。比特幣、以太幣加密貨幣交易策略，裸K判讀、成交量分布分析，完全免費教學。',
    images: [{ url: '/dmc-logo.png', width: 400, height: 400, alt: 'DMC加密交易 Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMC加密交易 | 主力思維交易系統',
    description: '學習主力思維，掌握加密貨幣交易。免費社群，免費教學。',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://dmc1-d61c7.web.app' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Source+Code+Pro:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-[#111713] text-foreground">
        {children}
      </body>
    </html>
  );
}
