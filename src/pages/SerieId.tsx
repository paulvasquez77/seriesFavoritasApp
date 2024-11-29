import { useParams } from 'react-router-dom';
import Layout from '../Components/Layout';
import { fetchOneData } from './../utils/fetchOneSerie';

export const SerieId = () => {
  const { id } = useParams();

  const { oneSerie } = fetchOneData(id);
  console.log(oneSerie);
  return (
    <Layout>
      <h1>aqui estarán los programas</h1>
      PostSeries
    </Layout>
  );
};
