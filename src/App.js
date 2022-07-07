
import { useState } from 'react';

import SignIn from './components/SignIn';
import Orders from './components/Orders';




function App() {
  const [token, setToken] = useState('');
  if(!token) {
    return <SignIn setToken={setToken} />
  }
  
  
  
  return (
   
    
    <Orders />
    
  );
}

export default App;
