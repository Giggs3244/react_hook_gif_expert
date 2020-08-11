import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [data, setData] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) =>
      setData({
        data: imgs,
        loading: false,
      })
    );
  }, [category]);

  return data;
};
