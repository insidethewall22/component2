import React, { useRef, useState } from "react";
import Poker from "./Poker";
import "./PokerSlide.css";

export default function PokerSlide({ imagesCount = 10, ...props }) {
  const [nums2, setNums2] = useState([
    { id: 1, data: "rotate(-10deg)" },
    { id: 2, data: "rotate(-6deg) translate(35%, -12%)" },
    { id: 3, data: "rotate(-2deg) translate(65%, -19%)" },
    { id: 4, data: "rotate(2deg) translate(95%, -26%)" },
    {
      id: 5,
      data: "rotate(6deg) translate(125%, -23% ",
    },
  ]);
  const ref = useRef([]);
  const move = () => {
    setNums2((prev) => {
      return prev.map((ite, index) => {
        if (ite.id + 1 > 5) {
          // ref.current[index].style.transform = "rotate(-10deg)";
          return {
            id: 1,
            data: "rotate(-10deg)",
          };
        } else {
          const nextData = prev.filter(
            (item) => item.id === ite.id + 1 && ite.data
          );
          // ref.current[index].style.transform = nextData[0].data;
          return {
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
            ref={(el) => (ref.current[index] = el)}
            key={item.id}
            num={item.id}
            index={index}
            transform={item.data}
            // onClick={num == nums.length ? move : null}
            imgNum={imagesCount - item.id}
          />
        );
      })}
      <div className="poker5 poker_top" onClick={move}></div>
    </div>
  );
}
