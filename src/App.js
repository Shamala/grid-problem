import { useState } from "react";

import Blocks from "./Blocks";

function App() {
  const [clickTracker, setClickTracker] = useState([]);

  const [blockReverse, setBlockReverse] = useState();

  const animate = (e) => {
    console.log("Animated....");
    // const reverseAction = (id) => {
    //   setTimeout(() => {
    //     setBlockReverse(id);
    //   }, 1000);
    // };
    // (async () => {
    //   e.preventDefault();
    //   const reversePromise = [];
    //   clickTracker.reverse().forEach((block) => {
    //     reversePromise.push(new Promise(() => reverseAction(block)));
    //   });
    //   await Promise.all(reversePromise);
    // })();
    setBlockReverse(clickTracker.at(-1));
  };

  return (
    <div>
      <header></header>
      <main>
        <section onClick={animate}>
          <div className="row1">
            {[1, 2, 3].map((id) => (
              <Blocks
                id={id}
                key={id}
                setClickTracker={() => {
                  setClickTracker((prevTracker) => [...prevTracker, id]);
                  console.log(clickTracker);
                }}
                blockReverse={blockReverse}
              />
            ))}
          </div>
          <div className="oneCell">
            {[4].map((id) => (
              <Blocks
                id={id}
                key={id}
                setClickTracker={() =>
                  setClickTracker((prevTracker) => [...prevTracker, id])
                }
                blockReverse={blockReverse}
              />
            ))}
          </div>
          <div className="row2">
            {[5, 6, 7].map((id) => (
              <Blocks
                id={id}
                key={id}
                setClickTracker={() =>
                  setClickTracker((prevTracker) => [...prevTracker, id])
                }
                blockReverse={blockReverse}
              />
            ))}
          </div>
          <div>
            <p>Clicked Index</p>
            {clickTracker.map((block) => (
              <span className="clicker" key={block}>
                {block}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
