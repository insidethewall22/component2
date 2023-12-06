import React from "react";

export default function Poker({ num, imgNum, index }) {
  const transition_data = [
    "rotate(-10deg)",
    "rotate(-6deg) translate(35%, -12%)",
    "rotate(-2deg) translate(65%, -19%)",
    "rotate(2deg) translate(95%, -26%) ",
    "rotate(6deg) translate(125%, -23% ",
  ];
  const transform = transition_data[num - 1];
  return (
    <div
      style={{
        transform: { transform },
        // zIndex: { num },
        transition: "transform 0.5s ease",
      }}
      className={`poker poker${index + 1}`}
    >
      <img src={`/images/photo_${imgNum}.jpg`} />
    </div>
  );
}
