import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";


const AboutPage = () => {
  const ambivalenceImg = require("../public/menu/ambivalence.png");
  const miscibleImg = require("../public/menu/miscible.png");
  const luxusImg = require("../public/menu/luxus.png");
  const restImg = require("../public/menu/rest.png");

  return (
    <Layout title="stefankartchev Work">
      <div id="tooltip-span" title="regular tooltip">
        Hover me
      </div>
      <div className="imagesContainer">
        <Link href={`/ambivalence`}>
          <a style={{ cursor: "pointer" }}>
            <Image src={ambivalenceImg} width={600} height={600} objectFit="contain" />
          </a>
        </Link>
        <Link href={`/miscible`}>
          <a style={{ cursor: "pointer" }}>
            <Image src={miscibleImg} width={600} height={600} objectFit="contain" />
          </a>
        </Link>
        <Link href={`/miscible`}>
          <a style={{ cursor: "pointer" }}>
            <Image src={restImg} width={600} height={600} objectFit="contain" />
          </a>
        </Link>
        <Link href={`/luxus`}>
          <a style={{ cursor: "pointer" }}>
            <Image src={luxusImg} width={600} height={600} objectFit="contain" />
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default AboutPage;
