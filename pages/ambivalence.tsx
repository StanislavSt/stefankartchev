import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const AmbivalencePage = () => {
  const img = require("../public/ambivalence/ambivalence1.jpg");
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

  const scrollTo = () => {
    // const el:any = document.getElementsByClassName('collection')
    // console.log(el)
    // el.scrollLeft = +1500
  };

  const handleMouseScroll = (
    flavoursContainer: any,
    flavoursScrollWidth: any
  ) => {
    self.setInterval(() => {
      if (flavoursContainer!.scrollLeft !== flavoursScrollWidth) {
        flavoursContainer!.scrollTo(flavoursContainer!.scrollLeft + 1, 0);
      }
    }, 11);
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
    <Layout title="Ambivalence" imgUrl="2">
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
        <div style={{ fontSize: "2.8rem" }}>Ambivalence</div>
        <div>Diploma Collection 2018</div>
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
            <div className="s">
              <img className="ambImage lazyload" data-src={img}></img>
            </div>
            <div className="imgGif">
              <img className="ambImage lazyload" data-src={img2}></img>
              <img
                className="gif2"
                src={img4}
              ></img>
              <img
                className="gif"
                src={img4}
              ></img>
            </div>

            <div className="s">
              <img className="ambImage lazyload" data-src={img3}></img>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AmbivalencePage;
