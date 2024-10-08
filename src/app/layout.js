import "./globals.css";
import Provider from "@/components/Provider";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 to-black-400">
        <nav>
          <Navbar/>
        </nav>
          {children}
        </body>
      </Provider>
    </html>
  );
}
