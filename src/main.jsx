import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './routes/RootLayout';
import PurchaseComplete from './routes/PurchaseCompleted';
import PurchaseForm from './routes/PurchaseForm';
import LinkBox from './routes/LinkBox';

import PersonalInfo from './components/PersonalInfo';
import BillingInfo from './components/BillingInfo';
import ConfirmPayment from './components/ConfirmPayment';


import './index.css';

const router = createBrowserRouter([
  {path: '/', 
    element: < RootLayout />,
    children: [
      {path: '', element: <LinkBox/>},
      {path: '/complete', element: <PurchaseComplete/>},
      {path: '/purchase',
         element: <PurchaseForm/>,
        //  timestamp: new Date().toString(),
         children: [
          {path: '', element: <PersonalInfo/>},
          {path: 'billings', element: <BillingInfo/>},
          {path: 'confirm', element: <ConfirmPayment/>},

         ]
      },
      
    ],
  },
  {path: '*', 
    element: < RootLayout />,
    children: [
      {path: '*', element: <LinkBox/>},
  ],
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
