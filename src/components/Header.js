import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
        getSearchSuggestions()
      }
      
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
    [searchQuery]: json[1]
    }));
  };
 

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 gap-3">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
        />
        
        <img
          className="h-8"
          alt="youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"
        />
        
      </div>
      <div className=" col-span-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 px-5 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 bg-gray-200 p-2 pl-6 pr-6 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 w-[34rem] shadow-lg rounded-lg">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="p-2 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
      </div>
    </div>
  );
};

export default Header;
