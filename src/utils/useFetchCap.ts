import { useEffect, useState } from "react";
import { FetchOneCap } from '../interfaces/FetchData';

export const useFetchCap = (id: number, season: number) => {
  const [episode, setEpisode] = useState<FetchOneCap | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const apiKey = "05a213970feebbc444c2e4b98200645b";
  const language = "es-CO";
  const url = `https://api.themoviedb.org/3/tv/${id}/season/${season}?api_key=${apiKey}&language=${language}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data: FetchOneCap = await response.json();
        setEpisode(data);
        console.log(data)
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, url]);

  return { episode, loading, error };
};