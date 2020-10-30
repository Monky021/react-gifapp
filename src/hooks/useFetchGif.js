import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs';


export const useFetchGif = (categoria) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs(categoria)
            .then((img)=>{
                
                setState({
                data: img,
                loading: false
                });
                
                
            })
    }, [categoria] )
    
    return state;
}