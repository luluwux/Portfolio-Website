import './globals.css'
import { Metadata } from 'next';
import Settings from './Settings/Config';

let title = Settings.Metadata.Title;
let description = Settings.Metadata.Description;
let ogimage = Settings.Metadata.OGImage
let sitename = Settings.Metadata.SiteName

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://cdn.discordapp.com/attachments/1053668408547356743/1125099854973120522/1676503452043_1.png",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-white">
        {children}
      </body>
    </html>
  );
}
