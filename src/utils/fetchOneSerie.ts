import { useEffect, useState } from "react";
import { FetchData } from "../interfaces/FetchData";

export const fetchOneData = (id: number) => {
    const [oneSerie, setOneSerie] = useState<FetchData[]>([]);

    async function oneData() {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/tv/${id}?api_key=05a213970feebbc444c2e4b98200645b&language=es-CO`
          );
          const data = await response.json();
          if (data) {
            console.log(data)
            setOneSerie(data);
          }
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      }
    
    
    useEffect(() => {
        oneData()
    }, []);

    return {oneSerie}
}

