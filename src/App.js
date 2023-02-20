// import logo from './logo.svg';
import './App.css';
 import Products from './Products'
import { Link, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './counter';
import Todoslist from './todoslist';
import Reduxcountries from './Reduxcountries';

function App() {
  return (
    <div>
      <h1>React-Router</h1>
      <a href='/products'>products</a>
      <br></br>
      <Link to='/products'>Go to products</Link>
      <br/>
      <Link to='/countries'>Countries</Link>
     <Outlet></Outlet>
      <Reduxcountries></Reduxcountries>
      {/* <Products></Products> */}

    </div>
  );
}

export default App;

  // <Provider store={store}>
  //   <div >
  //     <h1>REACT-REDUX</h1>
  //     <Counter></Counter>
  //     <Todoslist></Todoslist>

  //   </div>
  //   </Provider>


// {/* <h1 className='bg-dark text-white text-center '>Countries</h1>
//       {/* <a href='/products'>products</a> */}
//       {/* <br></br> */}
//       {/* <Link to={'/products'}>Prouducts</Link> */}
//       {/* <br></br> */}
//       <Link to={'/countries'}>Countries</Link>
//       <Outlet></Outlet>


//      <Products></Products> */}