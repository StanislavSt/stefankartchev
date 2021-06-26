import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

import { tooltipOnHover } from "../utils/tooltipOnHover";

const AboutPage = () => {
  const ambivalenceImg = require("../public/menu/ambivalence.png");
  const miscibleImg = require("../public/menu/miscible.png");
  const luxusImg = require("../public/menu/luxus.png");
  const restImg = require("../public/menu/rest.png");

  useEffect(() => {
    window.onmousemove = tooltipOnHover;
    return () => {};
  }, []);

  return (
    <Layout title="stefankartchev Work" imgUrl="4">
      <div className="imagesContainer">
        <>
          <a style={{ cursor: "pointer", margin: "50px" }}>
            <Link href={`/ambivalence`}>
              <Image
                className="dot"
                src={ambivalenceImg}
                width={600}
                height={600}
                objectFit="contain"
              />
            </Link>
          </a>
          <div className="content">
            <h1>Ambivalence</h1>
          </div>
        </>
        <>
          <a style={{ cursor: "pointer", margin: "50px" }}>
            <Link href={`/miscible`}>
              <Image
                className="dot"
                src={miscibleImg}
                width={600}
                height={600}
                objectFit="contain"
              />
            </Link>
          </a>

          <div className="content">
            <h1>Miscible</h1>
          </div>
        </>
        <>
          <a style={{ cursor: "pointer", margin: "50px" }}>
            <Link href={`/miscible`}>
              <Image
                className="dot"
                src={restImg}
                width={600}
                height={600}
                objectFit="contain"
              />
            </Link>
          </a>
          <div className="content">
            <h1>Tooltip heading</h1>
            <p>Some random text blah blah...</p>
          </div>
        </>
        <>
          <a style={{ cursor: "pointer", margin: "50px" }}>
            <Link href={`/luxus`}>
              <Image
                className="dot"
                src={luxusImg}
                width={600}
                height={600}
                objectFit="contain"
              />
            </Link>
          </a>
          <div className="content">
            <h1>Luxus</h1>
          </div>
        </>
      </div>
    </Layout>
  );
};

export default AboutPage;
