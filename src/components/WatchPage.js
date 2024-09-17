import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
    <div className="p-2 flex">
      <div>
      <iframe
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?autoplay=1"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        onPlaying={true}
      ></iframe>
      </div>
      <div className="w-full">
        <LiveChat/>
      </div>
    </div>
    <CommentsContainer/>
    </div>
  );
};

export default WatchPage;
