import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import { createRef, useEffect, useRef } from "react";

const AboutPage = () => {
  const ref = createRef() as any;
  let counter = 0;

  const scroll = () => {
    if (counter < 1000) {
      counter += 1;
      window.scrollBy({
        top: 30,
        behavior: "smooth",
      });
      setTimeout(() => {
        scroll();
      }, 100);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", () => {
      counter = 1000;
    });
    scroll();
    return () =>
      window.removeEventListener("mousedown", () => {
        counter = 1000;
      });
  }, []);

  const images = [
    "look1",
    "look2",
    "look3",
    "look4",
    "look5",
    "look6",
    "look7",
    "look8",
  ];
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>Work</h1>
      <p>This is the Work page</p>
      <div className="images-container" style={{ width: "900px" }}>
        {images.map((img) => {
          return (
            <Image
              quality={60}
              src={`/work/${img}.jpg`}
              width="900"
              height="1500"
              objectFit="cover"
            />
          );
        })}
      </div>
      <p ref={ref} className="scrollToHere">
        [1] ...
      </p>
    </Layout>
  );
};

export default AboutPage;
