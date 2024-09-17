import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { LIVE_CHAT_COUNT } from "../utils/constants";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    let i = setInterval(() => {
      dispatch(
        addChat({
          name: generateRandomName(),
          messages: makeRandomMessage(LIVE_CHAT_COUNT) + " 💚💥",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full ml-2 p-2 h-[500px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.messages} />
          ))}
        </div>
      </div>
      <form onSubmit={(e)=> {
      e.preventDefault();
      dispatch(addChat({
      name:'Ashish',
      messages: liveMessage
      }))
      setLiveMessage('');
      }} className="w-full border border-black ml-2 mt-1 p-2 rounded-lg">
        <input
          type="text"
          className="w-80 border border-gray-400 rounded-md pl-2 py-1"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-4 py-1 mx-2 bg-green-300 rounded-md">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
