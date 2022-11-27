import Sensors from './components/sensors/Sensors';
import Navbar from './components/navbar/Navbar';
import {Route, Routes } from 'react-router-dom'
import Graphs from './components/graphs/Graphs';
import Predict from './components/predict/Predict';
import Sidebar from './components/sidebar/Sidebar';
import { ReactorContextProvider } from './context/ReactorContext';

function App() {
  return (
      <div className="app" >
        <ReactorContextProvider>
          <Sidebar/>
          <Navbar/>
          {/* <ReactorSelect/> */}
          <div className="content">
            <Routes>
              <Route exact path="/" element = {<Sensors/>} />
              <Route exact path="/graphs" element = {<Graphs/>} />
              <Route exact path="/predict" element = {<Predict/>} />
            </Routes>
          </div>
        </ReactorContextProvider>
        
      </div>
  );
}

export default App;
