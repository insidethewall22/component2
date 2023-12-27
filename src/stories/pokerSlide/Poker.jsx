import React from "react";

const Poker = ({ num, imgNum, index, transform }) => {
  return (
    <div
      style={{
        transform: transform,
        zIndex: num,
        transition: num === 1 ? "" : "transform 1.2s ease",
      }}
      className={`poker poker${index + 1}`}
    >
      <img src={`/images/photo_${imgNum}.jpg`} />
    </div>
  );
};

export default Poker;
