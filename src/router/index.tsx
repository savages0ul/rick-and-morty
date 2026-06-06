import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components';
import { CharacterInfo } from '@/pages/CharacterInfo';
import { CharacterList } from '@/pages/CharacterList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CharacterList />
      },
      {
        path: 'character/:id',
        element: <CharacterInfo />
      }
    ]
  }
]);
