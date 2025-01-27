
import './App.css'; 
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login'
import Profile from './components/Profile.jsx'
function App() {


  return (
    <>
        <h1>Context Provider</h1>
        <UserContextProvider>
        <Login/> <br />
        <Profile />
        </UserContextProvider>
    </>
  )
}

export default App
