import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Navbar from './components/Navbar';
import OrderSummery from './components/OrderSummery';
import NoMatch from './components/NoMatch';
import Product from './components/Product';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='about' element={ <About />} />
        <Route path="/order-summary" element={ <OrderSummery/>} />
        <Route path="*"  element={<NoMatch/>}/>
        <Route path='product' element={<Product />}>
          {/* definging child route */}
          {/* index route */}
          <Route index element={<FeaturedProducts />} />
          <Route index path="featured" element={<FeaturedProducts/>} />
          <Route path="newproducts" element={ <NewProducts />} />
        </Route>
      </Routes>
    </div>
   
  );
}

export default App;
