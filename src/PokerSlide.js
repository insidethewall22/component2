import React, { useState } from "react";
import Poker from "./Poker";
import "./PokerSlide.css";

export default function PokerSlide({ imagesCount = 10, ...props }) {
  // Insert the new image in the end sequence of the pokers.

  const [nums2, setNums2] = useState([
    { id: 1, data: "rotate(-10deg)", imageId: 0 },
    { id: 2, data: "rotate(-6deg) translate(35%, -12%)", imageId: 1 },
    { id: 3, data: "rotate(-2deg) translate(65%, -19%)", imageId: 2 },
    { id: 4, data: "rotate(2deg) translate(95%, -26%)", imageId: 3 },
    {
      id: 5,
      data: "rotate(6deg) translate(125%, -23% ",
      imageId: 4,
    },
  ]);
  // start from 5th images(4 index)
  const [imgIndex, setImgIndex] = useState(nums2.length - 1);
  const move = () => {
    setImgIndex((prev) => {
      if (prev < imagesCount - 1) {
        return prev + 1;
      } else {
        return 0;
      }
    });
    setNums2((prev) => {
      return prev.map((ite, index) => {
        if (ite.id + 1 > 5) {
          return {
            imageId: imgIndex,
            id: 1,
            data: "rotate(-10deg)",
          };
        } else {
          const nextData = prev.filter(
            (item) => item.id === ite.id + 1 && ite.data
          );
          return {
            ...ite,
            id: ite.id + 1,
            data: nextData[0].data,
          };
        }
      });
    });
    console.log(nums2);
  };
  return (
    <div className="container">
      {nums2.map((item, index) => {
        return (
          <Poker
            key={index}
            num={item.id}
            index={index}
            transform={item.data}
            imgNum={item.imageId}
          />
        );
      })}
      <div className="poker5 poker_top" onClick={move}></div>
    </div>
  );
}
