import Layout from "../components/Layout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Pixi = dynamic(() => import("../components/pixi"), {
  ssr: false,
});

const AboutPage = () => {
  const router = useRouter();
  const handleRouter = (href: string) => {
    router.push(href);
  };

  return (
    <Layout title="stefankartchev Work">
      <Pixi getLink={handleRouter} />
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
