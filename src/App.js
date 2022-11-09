// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import About from './components/About';
import {
  createBrowserRouter,
  RouterProvider

} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Wheather dark mode is eabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#03132c';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - DarkMode'
    }
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
      document.title = 'TextUtils - LightMode'
    }
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <TextForm />,
      showAlert: { showAlert },
      heading: "Enter the text to analyze below",
      mode: { mode }
    },
    {
      path: "/about",
      element: <About />
    },
  ]);



  return (

    <>

      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
          </Switch> */}

        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>


      </div>

    </>

  );
}

export default App;
