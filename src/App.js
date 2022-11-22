import Sensors from './components/sensors/Sensors';
import Navbar from './components/navbar/Navbar';
import {Route, Routes } from 'react-router-dom'
import Graphs from './components/graphs/Graphs';
import User from './components/users/Users';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
      <div className="app" >
        <Sidebar/>
        <Navbar/>
        <div className="content">

          <Routes>
            <Route exact path="/" element = {<Sensors/>} />
            <Route exact path="/graphs" element = {<Graphs/>} />
            <Route exact path="/users" element = {<User/>} />
          </Routes>

        </div>
      </div>
  );
}

export default App;
