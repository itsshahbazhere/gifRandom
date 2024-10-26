import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("car");
  const { gif, loading, fetchUrl } = useGif(tag);

  return (
    <div className=" bg-gradient-to-r from-pink-500 to-violet-600 p-4 sm:w-1/2 w-3/4  gap-y-6 flex flex-col justify-evenly  items-center mt-5 rounded-2xl border-gray-500  border-2">
      <h2 className="text-2xl underline uppercase font-bold">
        Random {tag} GIF
      </h2>

      {loading ? <Loading /> : <img src={gif} alt="gifs" width={450} />}

      <input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className="w-11/12 p-2 text-lg rounded-xl focus:outline-none hover:ring-2 hover:ring-gray-500 focus:ring-green-500 focus:ring-2  transition duration-300"
      />
      <button
        className="w-11/12 py-1.5 text-lg bg-[#ffffffB2] hover:bg-white transition-all duration-200 rounded-xl font-semibold"
        onClick={() => fetchUrl(tag)}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
