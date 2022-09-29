// import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import Food from './components/Food/Food';

function App() {
  return (
    <div className="App">
      <h1 ><FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon> P. Hero Foodie War Competition </h1>
      <h3>We have six food item here, Choose wisely so that you can finish it <br />
        on time . Food weight and finishing time is visible on each item.  </h3>
      <Food></Food>
    </div>
  );
}

export default App;
