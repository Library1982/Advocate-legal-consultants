import type { Metadata } from 'next';import './globals.css';
export const metadata:Metadata={title:'Dr. Ibrahim Al Mulla | Advocates & Legal Consultants',description:'Bilingual legal consultancy website concept'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><noscript><style>{`.brandLoader{display:none!important}`}</style></noscript>{children}</body></html>}
