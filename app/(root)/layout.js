import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider} from '@clerk/nextjs'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vibe zone",
  description: "Next 14 Social Media App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2 text-light-1`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
