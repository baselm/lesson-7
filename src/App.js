

import SignIn from './components/SignIn';
import Products from './components/Products';
import useToken from './components/useToken';
import { Container } from '@mui/material';


 

function App() {

 const {token, setToken } = useToken();

  if(!token) {
    return <SignIn setToken={setToken} />
  }
  
  
  
  return (
    <Container>
      { token && <Products />}
    </Container>
   
    
    
    
    
  );
}

export default App;
