import { ReactNode } from "react";
import NavBar from "./_sections/nav-bar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col ">
      <NavBar />
      <div className=" w-full max-w-screen-xl mx-auto pt-8 pb-4 px-4 ">
        {children}
      </div>
    </div>
  );
}
