import { FC, ReactNode } from "react";
import { NavBar } from "./NavBar";

export const Layout: FC<ReactNode> = (children ) => {
 return (
  <>
   <NavBar />
   <main>{children}</main>
  </>
 );
};
