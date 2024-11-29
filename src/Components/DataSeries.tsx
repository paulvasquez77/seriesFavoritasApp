import { fullData } from '../utils/fetchData';
import PostSeries from './PostSeries';
export default function DataSeries() {
  const { postSeries } = fullData(1);
  return (
    <>
      {postSeries.map((series) => (
        <PostSeries key={series.id} series={series} />
      ))}
    </>
  );
}
