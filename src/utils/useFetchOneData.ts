import { useEffect, useState } from "react";
import { FetchOneData } from "../interfaces/FetchData";

export const useFetchOneData = (id: number) => {
  const [oneSerie, setOneSerie] = useState<FetchOneData | null>(null); // Cambiado a `null` para un único objeto
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Construcción modular de la URL
  const apiKey = "05a213970feebbc444c2e4b98200645b";
  const language = "es-CO";
  const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=${language}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data: FetchOneData = await response.json();
        setOneSerie(data);
        console.log(data)
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, url]);

  return { oneSerie, loading, error };
};