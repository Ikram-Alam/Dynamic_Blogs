// src/layout.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>AI & ML BLOGS</title>
        <link rel="shortcut icon" href="/favicon.jpg" type="image/x-icon" />
      </head>
      <body className='flex flex-col min-h-screen'>
        <Navbar />
        <main className="flex-grow container mx-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
