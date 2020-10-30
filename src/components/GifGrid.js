import React from "react";
import { useFetchGif } from "../hooks/useFetchGif";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItems } from "./GifGridItems";

export const GifGrid = ({ categoria }) => {

    const {loading, data: gifs } = useFetchGif(categoria);
  //const [img, setImg] = useState([]);



  

  return (
    <>
      <h3 className="animate__animated animate__rubberBand">{categoria}</h3>
      {loading && <p className="animate__animated animate__rubberBand">Cargando</p>   }
      <div className="card-grid">
        {gifs.map((imgs) => (
          <GifGridItems key={imgs.id} {...imgs} />
        ))}
      </div>
    </>
  );
};
