import Layout from "../components/Layout";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const Pixi = dynamic(() => import("../components/pixi"), {
  ssr: false,
});

const AboutPage = () => {
  let indexes = [0, 1, 2, 3];
  indexes.sort(() => 0.5 - Math.random());

  console.log(indexes);

  const randomPositions = [
    {
      top: `${1}vh`,
      left: `${12}vw`,
    },
    {
      top: `${22}vh`,
      left: `${55}vw`,
    },
    {
      top: `${44}vh`,
      left: `${41}vw`,
    },
    {
      top: `${45}vh`,
      left: `${22}vw`,
    },
  ];

  const images = ["ambivalence", "luxus", "miscible", "rest"];

  return (
    <Layout title="stefankartchev Work">
      <Pixi />
      <div className="imagesContainer">
        {/* {images.map((img, index) => (
          <div className="imgContainer" style={randomPositions[indexes[index]]}>
            <Link href={`/${img}`}>
              <a style={{ cursor: "pointer" }}>
                <Image
                  src={`/menu/${img}.png`}
                  width={600}
                  height={600}
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>
        ))} */}
      </div>
    </Layout>
  );
};

export default AboutPage;
