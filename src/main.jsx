import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './routes/RootLayout';
import PurchaseComplete from './routes/PurchaseCompleted';
import PurchaseForm from './routes/PurchaseForm';

import './index.css';

const router = createBrowserRouter([
  {path: '/', 
    element: < RootLayout />,
    children: [

      {path: '/complete', element: <PurchaseComplete/>},
      {path: '/purchase', element: <PurchaseForm/>},
      
    ],
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
