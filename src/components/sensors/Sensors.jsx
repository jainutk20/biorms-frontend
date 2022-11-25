/* ###### Wrapper component for sensor table ##### */

import SensorTable from "../sensorTable/SensorTable.jsx";
import useFetch from "../../useFetch";
import { ReactorContext } from "../../context/ReactorContext.js";
import { useContext } from "react";

const Sensors = () => {

    const reactorInfo = useContext(ReactorContext);
    let URL = 'http://localhost:5000/'+ reactorInfo.reactorNum + '/batch?batchsize=' + reactorInfo.batchSize;
    const {data:response, pending, error} = useFetch(URL);
    return (
        <div className="sensors" >
          {error && <p>Error: {error}</p>}
          {pending && <p>Loading...</p>}
          {response && <SensorTable schema ={response.schema} values = {response.values} title="All sensor values"/>}
          {/* This makes sure that the child components are not called when sensors is null */}
        </div>
      );
}
 
export default Sensors;