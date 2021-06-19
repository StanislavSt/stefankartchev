import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const MisciblePage = () => {
  const img = require("../public/miscible/miscibleLineup.jpg");

  const [collectionClass, setSollectionClass] = useState("collection");
  const [active, setActive] = useState(false);
  const [intervals, setIntervals] = useState<any>([]);

  const clickMe = () => {
    setSollectionClass("collection hover");
    setActive(true);
  };





  const handleEnter = (px: number) => {
    const flavoursContainer = document.getElementById("myDiv");
    const flavoursScrollWidth = flavoursContainer?.scrollWidth;

    const interval = setInterval(() => {
      // flavoursContainer!.scrollTo({
      //   left: 111,
      //   behavior: 'smooth'
      // });
      if (flavoursContainer!.scrollLeft !== flavoursScrollWidth) {
        flavoursContainer!.scrollTo(flavoursContainer!.scrollLeft + px, 0);
      }
      console.log("interval running miscible");

    }, 11);
    setIntervals([...intervals, interval]);
    // listener= true
  };
  const handleLeave = () => {
    intervals.forEach((x: any) => clearInterval(x));
    setIntervals([]);
  };
  const handleMouseMove = (e: any) => {
    handleLeave();
    const width = document.documentElement.clientWidth;
    const x = e.screenX;
    console.log(width / 4);

    if (x < width / 4) {
      handleEnter(-9);
    } else if (x < width / 4 + width / 4) {
      handleEnter(-4);
    } else if (x > width / 4 + width / 4 + 100 + width / 4) {
      handleEnter(9);
    } else if (x < width / 2 + 66 && x > width / 2 - 66) {
      return;
    } else handleEnter(4);
  };

  useEffect(() => {}, []);
  const closeMe = () => {
    setSollectionClass("collection");
    setActive(false);
  };

  return (
    <Layout title="Ambivalence" imgUrl="3">
hello
    </Layout>
  );
};

export default MisciblePage;
