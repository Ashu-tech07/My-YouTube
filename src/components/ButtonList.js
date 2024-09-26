import React, { useRef } from "react";
import Button from "./Button";
import leftScrollIcon from '../assets/left-scroll.svg'
import rightScrollIcon from '../assets/right-scroll.svg'
import { useSelector } from "react-redux";

const list = [
  "All",
  "Movies",
  "Music",
  "Gaming",
  "Cricket",
  "Sports",
  "Podcasts",
  "Cooking",
  "Live",
  "Education",
  "Hoolywood",
  "News",
  "Boolywood",
  "Computer",
  "Programming",
  "History",
  "Science",
  "Technology",
];

const ButtonList = () => {
  const scrollRef = useRef(null);

  const isMenuOpen= useSelector(store=> store.app.isMenuOpen)
  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(scrollRef.current.children[0]).width
      );
      scrollRef.current.scrollLeft = scrollLeft - itemWidth * 3;
    });
  };

  const next=()=>{
    requestAnimationFrame(()=>{
      const scrollLeft=scrollRef.current.scrollLeft;
      const itemWidth=parseInt(getComputedStyle(scrollRef.current.children[0]).width);
      scrollRef.current.scrollLeft= scrollLeft + itemWidth*3;
    })
  }


  return (
    <div className={`flex ${isMenuOpen?'ml-[280px]':'ml-6'}  z-40 bg-white pb-2`}>
      <button onClick={()=>prev()} 
        className="hover:rounded-full w-10 h-10 mr-2 hover:bg-gray-100 fixed z-10">
          <img alt="leftScrollBtn" className="inline-block" src={leftScrollIcon}></img>
        </button>
      <div ref={scrollRef} className="max-w-[86%] overflow-x-hidden flex mx-12">
      {list.map((item, index) => {
        return <Button key={index} name={item} />;
      })}
      </div>
      <button onClick={()=>next()} 
        className="hover:rounded-full w-10 h-10 ml-2 right-20 hover:bg-gray-100 fixed z-10">
          <img alt="rightScrollBtn" className="inline-block" src={rightScrollIcon}></img>
        </button>
    </div>
  );
};

export default ButtonList;
