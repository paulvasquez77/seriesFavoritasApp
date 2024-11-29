import { Route, Routes } from 'react-router-dom';
import CenterTexts from '../Components/CenterTexts';
import { SerieId } from '../pages/SerieId';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CenterTexts />} />
      <Route path="/programa" element={<SerieId />} />
      <Route path="/programa/:id" element={<SerieId />} />
      <Route path="*" element={<CenterTexts />} />
    </Routes>
  );
};
