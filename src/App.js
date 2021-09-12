//import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="flex justify-between items-center bg-gray-300 py-7 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          
          <ul class="nav nav-pills">
        <li class="nav-item">
     <a class="button-active text-right object-right " aria-current="page" href="#">Login</a>
      </li>
      </ul>
      <ul class="nav nav-pills">
      <li class="nav-item-search">
      <input class="search text-white" type="text" placeholder="Cari menu makanan..." required/>
      <input class="button" type="button" value="Find"></input>
      </li>  
      </ul>
          </div>
        </div>
      </div>
   
  );
}

export default App;