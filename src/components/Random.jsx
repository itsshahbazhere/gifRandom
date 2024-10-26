import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchUrl } = useGif();

  return (
    <div className=" bg-gradient-to-r from-green-200 to-blue-500 p-4 sm:w-1/2 w-3/4 gap-y-6 flex flex-col justify-evenly  items-center mt-5 rounded-2xl border-gray-500  border-2">
      <h2 className="text-2xl underline uppercase font-bold">A Random GIF</h2>

      {loading ? <Loading /> : <img src={gif} width={450} />}
      <button
        className="w-11/12 py-1.5 text-lg bg-[#ffffffB2] hover:bg-white transition-all duration-200 rounded-xl font-semibold"
        onClick={() => fetchUrl()}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
