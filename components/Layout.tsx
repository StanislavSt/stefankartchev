import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
  imgUrl?: "1" | "2" | "3";
};

const Layout = ({
  children,
  title = "This is the default title",
  imgUrl = "1",
}: Props) => {
  const img = require("../public/images/logo_black.png");
  const img2 = require("../public/abBackground.jpg");
  const img3 = require("../public/miscible/miscibleBG.jpg");

  return (
    <div
      style={{
        backgroundColor: "#5c5c5c",
        height: "100%",
        minHeight: "100vh",
        background:
          "url(" +
          `${imgUrl === "1" ? img : imgUrl === "3" ? img3 : img2}` +
          ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "10% 10%",
      }}
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
};

export default Layout;
