import Layout from "../components/Layout";
import Image from "next/image";

const AboutPage = () => {
  const images = ["ambivalence", "luxus", "miscible", "rest"];
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>Work</h1>
      <p>This is the Work page</p>
      {images.map((img) => (
        <Image
          src={`/menu/${img}.png`}
          width={500}
          height={500}
          objectFit="contain"
        />
      ))}
    </Layout>
  );
};

export default AboutPage;
