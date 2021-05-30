import Layout from "../components/Layout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Pixi = dynamic(() => import("../components/pixi"), {
  ssr: false,
});

// var tooltipSpan = window.document.getElementById("tooltip-span");

// window.onmousemove = function (e: any) {
//   var x = e.clientX,
//     y = e.clientY;
//   tooltipSpan!.style.top = y + 20 + "px";
//   tooltipSpan!.style.left = x + 20 + "px";
// };

const AboutPage = () => {
  const router = useRouter();
  const handleRouter = (href: string) => {
    router.push(href);
  };
  const handleHoverName = () => {};

  return (
    <Layout title="stefankartchev Work">
      <Pixi getLink={handleRouter} getHoverName={handleHoverName} />
      <div id="tooltip-span" title="regular tooltip">Hover me</div>
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
