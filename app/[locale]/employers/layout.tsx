import { ReactNode } from "react";
import NavBar from "./_sections/nav-bar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="bg-red-500 w-full max-w-screen-lg mx-auto my-5">
        {children}
      </div>
    </div>
  );
}
