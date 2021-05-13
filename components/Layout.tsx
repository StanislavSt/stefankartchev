import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div
    style={{ backgroundColor: "#5c5c5c", height: "100%", minHeight: "100vh" }}
  >
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="main" style={{ width: "100%", height: "100%" }}>
      <Navbar />
      {children}
    </div>
  </div>
);

export default Layout;
