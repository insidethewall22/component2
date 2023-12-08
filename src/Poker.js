import React, { useEffect } from "react";
import { forwardRef } from "react";

const Poker = forwardRef(({ num, imgNum, index, transform }, ref) => {
  return (
    <div
      style={{
        transform: transform,
        zIndex: num,
        transition: "transform 0.5s ease",
      }}
      ref={ref}
      className={`poker poker${index + 1}`}
    >
      <img src={require(`./images/photo_${index}.jpg`)} />
    </div>
  );
});

export default Poker;
