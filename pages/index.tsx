// import { NextPage, GetStaticProps } from "next";
import Layout from "../components/Layout";
import Image from "next/image";
import { dragElement } from "../utils/draggable";
import { useEffect } from "react";
const HomePage = () => {
  // const images = ["image1", "image2", "image3", "image4", "image5", "image6"];

  const images = [
    {
      name: "image1",
      width: 600,
      height: 410,
    },
    {
      name: "image2",
      width: 680,
      height: 600,
    },
    {
      name: "image3",
      width: 555,
      height: 444,
    },
    {
      name: "image4",
      width: 500,
      height: 500,
    },
    {
      name: "image5",
      width: 700,
      height: 400,
    },
    {
      name: "image6",
      width: 400,
      height: 700,
    },
  ];

  const getRandomPosition = () => {
    const top = Math.floor(Math.random() * 60);
    const left = Math.random() * (80 - 10) + 10;

    return {
      top: `${top}vh`,
      left: `${left}vw`,
    };
  };

  useEffect(() => {
    images.forEach((img) => dragElement(img.name));

   
  }, []);
  return (
    <Layout>
      <div style={{ marginLeft: "50px", marginTop: "150px" }}>
        {images.map((img) => {
          return (
            <div
              className="drag"
              id={`${img.name}`}
              key={img.name}
              style={getRandomPosition()}
            >
              <Image
                quality={70}
                src={`/images/${img.name}.jpg`}
                height={img.height}
                width={img.width}
                objectFit="cover"
              />
            </div>
          );
        })}
      </div>
     
    </Layout>
  );
};
// export const getStaticProps: GetStaticProps = async () => {
//   const content = await import(`../content/pages/${"home"}.md`);
//   return { props: { content: content.default } };
// };
export default HomePage;
