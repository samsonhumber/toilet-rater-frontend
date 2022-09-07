import NavBar from "./NavBar";
import Footer from "./Footer";
//import { AppProps } from "next/app";
import React from "react";

type ChildProps = React.PropsWithChildren<{}>;


export default function Layout({ children }: ChildProps) {
  return (
    <>
      <NavBar />
      <section></section>
      <>{children}</>
      <Footer />
    </>
  );
}
