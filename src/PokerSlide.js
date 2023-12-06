import React, { useState } from "react";
import Poker from "./Poker";
import "./PokerSlide.css";

export default function PokerSlide({ imagesCount = 10, ...props }) {
  const [nums, setNums] = useState([1, 2, 3, 4, 5]);
  const move = () => {
    setNums((prev) => {
      return prev.map((num) => {
        if (num + 1 > 5) {
          return 1;
        }
        return num + 1;
      });
    });
    console.log(nums);
  };
  return (
    <div className="container">
      {nums.map((num, index) => {
        return (
          <Poker
            key={num}
            num={num}
            index={index}
            // onClick={num == nums.length ? move : null}
            imgNum={imagesCount - num}
          />
        );
      })}
      <div className="poker5 poker_top" onClick={move}></div>
    </div>
  );
}
