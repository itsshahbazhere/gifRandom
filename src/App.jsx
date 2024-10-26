import { useEffect, useState } from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {


  return (
    <div className="w-full min-h-screen background flex flex-col items-center py-10">
      <div className="w-11/12 bg-gradient-to-r from-green-300 to-yellow-300 rounded-2xl flex justify-center">
        <h1 className="font-bold text-3xl py-4 uppercase">Random GIF's</h1>
      </div>
      <div className="w-full h-full flex flex-col items-center">
          <Random/>
          <Tag/>
      </div>
    </div>
  );
}

export default App;
