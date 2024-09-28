import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../redux/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { LIVE_CHAT_COUNT } from "../utils/constants";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const [isShowChat, setIsShowChat] = useState(true);
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    let i = setInterval(() => {
      dispatch(
        addChat({
          name: generateRandomName(),
          messages: makeRandomMessage(LIVE_CHAT_COUNT) + " 💚 💥 💯",
        })
      );
    }, 800);

    return () => clearInterval(i);
  }, []);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addChat({
        name: "Ashish",
        messages: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <>
      {!isShowChat ? (
        <div className=" w-[280px] h-[20px]  mx-3 text-center">
          <button
            onClick={() => setIsShowChat(true)}
            className="rounded-full hover:bg-gray-200 border py-1 w-full text-[14px]"
          >
            Show Chat
          </button>
        </div>
      ) : (
        <div className="w-[320px] h-[680px] border rounded-lg ">
          <div className="h-[30px] p-2 ml-1">Live Chat</div>
          <hr className="h-[1px] my-2 border-b-[1px] border-0" />
          <div className="h-[470px] overflow-y-scroll overflow-hidden  flex flex-col-reverse">
            {chatMessage.map((c, index) => (
              <ChatMessage key={index} name={c.name} message={c.messages} />
            ))}
          </div>
          <hr className="h-[1px] my-2 border-b-[1px] border-0" />
          <form onSubmit={(e) => handleChatSubmit(e)}>
            <div className="flex px-1 my-2">
              <img
                className="h-4 rounded-full"
                alt="user-icon"
                src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
              />
              <div className="font-medium text-[13px] ml-1 text-gray-500">
                Ashish Yadav
              </div>
            </div>
            <div className="px-3 w-full">
              
              <input
                value={liveMessage}
                onChange={(e) => setLiveMessage(e.target.value)}
                maxLength="200"
                className="border-b-[1px] border-gray-400 h-7 outline-none text-[13px] w-full focus:border-blue-500 focus:border-b-[2px] pb-2"
                type="text"
                placeholder="Chat..."
              />
              <div className="flex justify-end text-gray-500 text-[13px] mt-2">
                <span className="mr-3">{liveMessage?.length}/200</span>
                <button className="border rounded-full px-3">Send</button>
              </div>
            </div>
          </form>
          <hr className="h-[1px] my-2 border-b-[1px] border-0" />
          <div className='mx-3 text-center'><button onClick={() => setIsShowChat(false)} className='hover:rounded-full hover:bg-gray-200 py-1 w-full text-[14px]'>Hide Chat</button></div>

        </div>
      )}
    </>
  );
};

export default LiveChat;
