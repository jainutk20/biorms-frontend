/* ###### Wrapper component for sensor table ##### */

import SensorTable from "../sensorTable/SensorTable.jsx";
import useFetch from "../../useFetch";
import ReactorContext from "../../context/ReactorContext.js";
import { useContext } from "react";
import ReactorSelect from "../reactorSelect/ReactorSelect.jsx";

const Sensors = () => {

    const {reactorNum, batchSize} = useContext(ReactorContext);
    // let [pending, setPending] = useState(true);
    let URL = 'http://localhost:6000/'+ reactorNum + '/batch?batchsize=' + batchSize;
    let {data:response, pending, setPending, error} = useFetch(URL);
    return (
        <div className="sensors" >

          <h2>Sensor values</h2>
          <hr/>

          <ReactorSelect setPending = {setPending}/>

          {error && <p>Error: {error}</p>}
          {pending && <p>Loading...</p>}
          {response && <SensorTable schema ={response.schema} values = {response.values}/>}
          {/* This makes sure that the child components are not called when sensors is null */}
        </div>
      );
}
 
export default Sensors;