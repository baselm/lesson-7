
import { useState } from 'react';

import SignIn from './components/SignIn';
import Products from './components/Products';




function App() {
  const [token, setToken] = useState('');
  if(!token) {
    return <SignIn setToken={setToken} />
  }
  
  
  
  return (
   
    
    <Products />
    
  );
}

export default App;
