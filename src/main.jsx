import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './routes/RootLayout';
import PurchaseComplete from './routes/PurchaseCompleted';
import PurchaseForm from './routes/PurchaseForm';


import PersonalInfo from './components/PersonalInfo';
import BillingInfo from './components/BillingInfo';
import ConfirmPayment from './components/ConfirmPayment';


import './index.css';

const router = createBrowserRouter([
  {path: '/', 
    element: < RootLayout />,
    children: [

      {path: '/complete', element: <PurchaseComplete/>},
      {path: '/purchase',
         element: <PurchaseForm/>,
         children: [
          {path: '', element: <PersonalInfo/>},
          {path: 'billings', element: <BillingInfo/>},
          {path: 'confirm', element: <ConfirmPayment/>},

         ]
      },
      
    ],
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
