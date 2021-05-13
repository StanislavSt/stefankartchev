import Layout from "../components/Layout";
import Image from "next/image";
import dynamic from "next/dynamic";

const Pixi = dynamic(() => import("../components/pixi"), {
  ssr: false,
});
const AboutPage = () => {
  const getRandomPosition = () => {
    const top = Math.floor(Math.random() * 60);
    const left = Math.random() * (60 - 10) + 10;

    return {
      top: `${top}vh`,
      left: `${left}vw`,
    };
  };

  const images = ["ambivalence", "luxus", "miscible", "rest"];
  return (
    <Layout title="stefankartchev Work">
      <Pixi/>
      <div className="imagesContainer">
        {images.map((img) => (
          <div className="imgContainer" style={getRandomPosition()}>
            <Image
              src={`/menu/${img}.png`}
              width={400}
              height={400}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AboutPage;
