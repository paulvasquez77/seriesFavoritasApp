import { useEffect, useState } from "react";
import { FetchData } from "../interfaces/FetchData";

export const fullData = (page: number) => {
    const [postSeries, setPostSeries] = useState<FetchData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    async function fetchData() {
        try {
          setLoading(true);
          const response = await fetch(
            `https://api.themoviedb.org/3/trending/tv/day?api_key=05a213970feebbc444c2e4b98200645b&language=es-CO&page=${page}`
          );
          const data = await response.json();
          if (data.results) {
            console.log(data)
            setPostSeries((prevSeries) => [...prevSeries, ...data.results]);
            setLoading(false);
          }
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      }
    
    
    useEffect(() => {
        fetchData()
    }, [page]);

    return {postSeries, loading}
}

