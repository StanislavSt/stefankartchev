import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const MisciblePage = () => {
  const img = require("../public/miscible/miscibleLineup.jpg");
  const img2 = require("../public/ambivalence/ambivalence2.jpg");
  const img3 = require("../public/ambivalence/ambivalence3.jpg");
  const img4 = require("../public/ambivalence/try3.gif");

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
      console.log("hello");
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
      <div className="ambivalence">
        {active ? (
          <div
            className="closeMe"
            style={{ color: "white" }}
            onClick={() => closeMe()}
          >
            X
          </div>
        ) : null}
        <div style={{ fontSize: "2.8rem" }}>Miscible Displacement</div>
        <div>Bachelor Collection 2016</div>
        <div>Antwerp, Belgium</div>
        <div
          className={collectionClass}
          id="myDiv"
          // onMouseEnter={() => handleEnter()}
          onMouseLeave={() => handleLeave()}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          {active ? null : (
            <div
              className="clickMe"
              style={{ color: "white" }}
              onClick={() => clickMe()}
            >
              ^
            </div>
          )}
          <div className="images">
              <img className="miscibleImage lazyload" data-src={img}></img>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MisciblePage;
