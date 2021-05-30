import { useState } from "react";
import Layout from "../components/Layout";

const AmbivalencePage = () => {
  const img = require("../public/ambivalence/ambivalence1.jpg");
  const img2 = require("../public/ambivalence/ambivalence2.jpg");
  const img3 = require("../public/ambivalence/ambivalence3.jpg");

  const [collectionClass, setSollectionClass] = useState("collection");
  const [active, setActive] = useState(false);

  const clickMe = () => {
    setSollectionClass("collection hover");
    setActive(true);
  };

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
        <div className={collectionClass}>
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
              <img className="ambImage" src={img}></img>
            </div>
            <div className="imgGif">
              <img className="ambImage" src={img2}></img>
              <img
                className="gif2"
                src="https://media.tenor.com/images/89c2fc544cebafa603f3cd75bff2964c/tenor.gif"
              ></img>
              <img
                className="gif"
                src="https://media.giphy.com/media/A33yHDkff3Bgk/giphy.gif"
              ></img>
            </div>

            <div className="s">
              <img className="ambImage" src={img3}></img>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AmbivalencePage;
