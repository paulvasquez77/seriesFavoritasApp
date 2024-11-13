import PostSeries from './PostSeries';

async function fetchData() {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/tv/week?api_key=05a213970feebbc444c2e4b98200645b&language=es-CO&page=1'
  );
  const data = await response.json();
  console.log(data.results);
  return data.results;
}

export default async function DataSeries() {
  const postSeries = await fetchData();

  return (
    <>
      {postSeries.map((series) => (
        <PostSeries series={series} key={series.id} />
      ))}
    </>
  );
}
