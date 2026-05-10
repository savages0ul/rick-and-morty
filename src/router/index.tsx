import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { CharacterInfoPage } from '../pages/CharacterInfoPage';
import { CharactersPage } from '../pages/CharactersPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CharactersPage />
      },
      {
        path: 'character/:id',
        element: <CharacterInfoPage />
      }
    ]
  }
]);
