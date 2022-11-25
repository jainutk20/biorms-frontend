import Sensors from './components/sensors/Sensors';
import Navbar from './components/navbar/Navbar';
import {Route, Routes } from 'react-router-dom'
import Graphs from './components/graphs/Graphs';
import Predict from './components/predict/Predict';
import Sidebar from './components/sidebar/Sidebar';
import { ReactorContext } from './context/ReactorContext';

function App() {
  return (
    <ReactorContext.Provider value={{reactorNum :"reactor4",batchSize : 50}}>
      <div className="app" >
        <Sidebar/>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route exact path="/" element = {<Sensors/>} />
            <Route exact path="/graphs" element = {<Graphs/>} />
            <Route exact path="/predict" element = {<Predict/>} />
          </Routes>
        </div>
      </div>
    </ReactorContext.Provider>
  );
}

export default App;
