import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import Greet from './component/Greet';//no need to weight jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greet />
  </StrictMode>
);
