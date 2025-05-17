import { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="bg-ntcBlue text-white py-4 text-center text-sm">
        © {new Date().getFullYear()} Nautical Training Corps. All rights reserved.
      </footer>
    </div>
  );
}
