import 'bootstrap/dist/css/bootstrap.min.css';
import useCurrencyInfo  from './hooks/useCurrencyInfo';


function App() {
const data = useCurrencyInfo('inr');
  function handleClick(){
    console.log(data);
  }

  return (
    <>
      <button onClick={handleClick}>click</button>
    </>
  )
}

export default App
