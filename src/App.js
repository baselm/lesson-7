


import SignIn from './components/SignIn';
import Orders from './components/Orders';
import useToken from './components/useToken';



function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <SignIn setToken={setToken} />
  }
  
  
  
  return (
   
    <div>
       {token && <Orders />}  
    </div>
   
  );
}

export default App;
