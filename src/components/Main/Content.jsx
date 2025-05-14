import React from "react";
import {
  FaCode,
  FaCompass,
  FaGlobe,
  FaLightbulb,
  FaUser,
} from "react-icons/fa";
import user from "../../assets/avatar.avif";

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
      <div className="flex flex-col py-[20px]">
        <div className="text-6xl font-medium text-[#c4c7c5] p-5">
          <p>
            <span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] text-transparent bg-clip-text font-semibold">
              Howdy Mate
            </span>
          </p>
          <p className="">What can I do for you today?</p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 p-5">
          <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 hover:scale-105 transition-transform duration-300">
            <div className="p-4 bg-[#f0f4f9] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4">
              <div className="bg-white rounded-full shadow-inner">
                <FaCompass className="text-blue-600 text-2xl" />
              </div>
              <p className="text-gray-800 font-medium text-lg">
                Suggest a place to visit..
              </p>
            </div>
          </div>
          {/* Start Building Card */}
          <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:scale-105 transition-transform duration-300">
            <div className="p-4 bg-[#f0f4f9] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-inner">
                <FaLightbulb className="text-yellow-500 text-2xl" />
              </div>
              <p className="text-gray-800 font-medium text-lg">
                Start building with your own ideas..
              </p>
            </div>
          </div>

          {/* Create Website Card */}
          <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:scale-105 transition-transform duration-300">
            <div className="p-4 bg-[#f0f4f9] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-inner">
                <FaCode className="text-green-600 text-2xl" />
              </div>
              <p className="text-gray-800 font-medium text-lg">
                Create your first website..
              </p>
            </div>
          </div>

          {/* Search Globally Card */}
          <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 transition-transform duration-300">
            <div className="p-4 bg-[#f0f4f9] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-inner">
                <FaGlobe className="text-purple-600 text-2xl" />
              </div>
              <p className="text-gray-800 font-medium text-lg">
                Search anything globally..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
