import { ReactNode } from "react";
import SideBar from "./_sections/side-bar";
import NavBar from "./_sections/nav-bar";
import SubNavBar from "./_sections/sub-nav-bar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex overflow-hidden h-screen">
      <SideBar />
      <div className="flex-1">
        <NavBar />
        <SubNavBar />
        {children}
      </div>
    </div>
  );
}
