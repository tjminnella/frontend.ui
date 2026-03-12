import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import CountdownTimer  from '././components/lessons/countdownTimer.tsx'
import EventRSVPForm from './components/lessons/eventRsvForm.tsx';
import { SuperheroForm } from './components/lessons/superHero.tsx';
import { ShoppingList } from './components/lessons/shoppingApp.tsx';
import { OTPGenerator } from './components/lessons/otpGenerator.tsx';

import './index.css'
import App from './App.tsx'


//createRoot(document.getElementById("root")).render(
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App/>} />
        <Route path="about" element={<ShoppingList />} />
        <Route path="products">
          <Route index element={<OTPGenerator />} />
        <Route path=":category" element={<EventRSVPForm />} />
          <Route path=":category/:productId" element={<SuperheroForm />} />
        {/*<Route path="trending" element={<Trending />} />*/}
      </Route>
    </Routes>
    </BrowserRouter>
    
  </StrictMode>
);

/*createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/
