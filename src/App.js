// import logo from './logo.svg';
import './App.css';
/** font awsome added and applied on website header */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import Food from './components/Food/Food';

function App() {
  return (
    <div className="App">
      {/* Header headline added from here  */}
      <h1 ><FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon> P. Hero Foodie War Competition </h1>
      <h3>We have six food item here, Choose wisely so that you can finish it <br />
        on time . Food weight and finishing time is visible on each item.  </h3>
      {/* Header section end here  */}
      {/* Food Component Added Here */}
      <Food></Food>
    </div>
  );
}

export default App;
