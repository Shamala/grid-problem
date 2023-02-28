import { useState } from "react";

const Blocks = ({ id, setClickTracker, blockReverse }) => {
  const [blockClicked, setBlockClicked] = useState(false);
  if (blockReverse === id) {
    setBlockClicked(false);
  }
  return (
    <div
      className={`block ${blockClicked ? "blockGreen" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setBlockClicked((prev) => !prev);
        setClickTracker();
      }}
      id={id}
      key={id}
    >
      {id}
    </div>
  );
};
export default Blocks;
