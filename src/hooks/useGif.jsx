import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchUrl(tag) {
    setLoading(true);
    const output = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSrc = output.data.data.images.downsized_large.url;
    setGif(imageSrc);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl('car');
  }, []);

  return { gif, loading, fetchUrl };
};

export default useGif;
