import Card from './Card.js';
import './App.css';
import Heading from './Heading.js';

function App() {
  return <h1>
    <Card h2="First card's h2" h3="First card's h3"/>
    <Card h2="Second card's h2" h3="Second card's h3"/>
    <Card h2="Third card's h2" h3="Third card's h3"/>
  </h1>
}

export default App;
