import React from "react";
import {
  FaCode,
  FaCompass,
  FaGlobe,
  FaLightbulb,
  FaUser,
} from "react-icons/fa";
import user from "../../assets/avatar.avif";
import { MdBrowseGallery, MdMic, MdPhoto, MdSend } from "react-icons/md";

const Content = () => {
  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative w-full">
      <div className="flex items-center justify-between text-xl p-5 text-[#585858]">
        <p>GForce</p>
        <img
          src={user}
          alt=""
          className="w-10 h-10 object-contain rounded-[50%]"
        />
      </div>
      <div className="container max-w-4xl w-full mx-auto">
      <div className="flex flex-col py-2">
        <div className="md:text-6xl text-lg font-medium text-[#c4c7c5] p-5 flex flex-col gap-6">
          <p>
            <span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] text-transparent bg-clip-text font-semibold">
              Howdy Mate
            </span>
          </p>
          <p className="">What can I do for you today?</p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 p-5">
          <div className="relative p-4 bg-[#f0f4f9] rounded-xl gap-4 cursor-pointer h-28">
            <p className="text-gray-400 font-medium text-sm">
              Explore opportunities tailored for your goals.
            </p>
            <FaCompass className="w-8 h-8 p-1 absolute text-blue-500 rounded-2xl bottom-2.5 right-2.5" />
          </div>
          {/* Start Building Card */}

          <div className="relative p-4 bg-[#f0f4f9] rounded-xl gap-4 cursor-pointer h-28">
            <p className="text-gray-400 font-medium text-sm">
              Get ideas and inspiration for your projects.
            </p>
            <FaLightbulb className="w-8 h-8 p-1 absolute text-yellow-500 rounded-2xl bottom-2.5 right-2.5" />
          </div>

          {/* Create Website Card */}

          <div className="relative p-4 bg-[#f0f4f9] rounded-xl gap-4 cursor-pointer h-28">
            <p className="text-gray-400 font-medium text-sm">
              Start building websites or applications today.
            </p>
            <FaCode className="w-8 h-8 p-1 absolute text-black rounded-2xl bottom-2.5 right-2.5" />
          </div>

          {/* Search Globally Card */}

          <div className="relative p-4 bg-[#f0f4f9] rounded-xl gap-4 cursor-pointer h-28">
            <p className="text-gray-400 font-medium text-sm">
              Search across the world with our powerful tools.
            </p>
            <FaGlobe className="w-8 h-8 p-1 absolute text-green-500 rounded-2xl bottom-2.5 right-2.5" />
          </div>
        </div>
        <div className="absolute bottom-0 w-full p-5 mx-auto max-w-4xl">
          <div className="flex items-center justify-between bg-[#f0f4f9] gap-5 px-2 py-4 rounded-[50px]">
            <input type="text" placeholder="Start your Journey here..........."/>
            <div className="flex">
              <MdPhoto className="w-6 cursor-pointer"/>
              <MdMic className="w-6 cursor-pointer"/>
              <MdSend className="w-6 cursor-pointer"/>
            </div>
          </div>
          <p className="">
            Gforce may display inaccurate information about people, places, or things.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Content;
