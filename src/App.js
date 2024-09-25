import './App.css';
import ProductSection from './ProductSection';
import { useFetch } from './useFetch';

//useRef Hooks
// difference between useRef and useState

//Lets create our own custom hook




function App() {

const [products,loading,error] = useFetch()


  return (
    <div  className="App">
      {loading && <p>Loading...</p>}
      {error && <p>Error Occurred...</p>}
  {
    products.length >0 &&  <h1>{JSON.stringify(products)}</h1>
  }

   <ProductSection/>
    </div>
  );
}

export default App;
