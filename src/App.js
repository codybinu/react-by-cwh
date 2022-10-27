// import logo from './logo.svg';
import './App.css';

let name = "Binu"
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate dolores eligendi accusamus ratione incidunt id esse sapiente iste, unde eius tempora nemo asperiores perspiciatis, officiis aperiam ullam. Natus, sit odit.
        </p>
      </div>
    </>
  );
}

export default App;
