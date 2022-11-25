// ########## Wrapper component for all sensor graphs #########
import React, { useContext } from 'react'
import { ReactorContext } from '../../context/ReactorContext';
import useFetch from '../../useFetch';
import GraphDisplay from '../graphDisplay/GraphDisplay';
import './graphs.css'


export default function Graphs() {
  const reactorInfo = useContext(ReactorContext);
  let URL = 'http://localhost:5000/'+ reactorInfo.reactorNum + '/batch?batchsize=' + reactorInfo.batchSize;

  // Define list of line colors and border colors for the graphs
  const colors = ["rgba(255,100,0,0.8)", "rgba(5, 105, 107,0.8)", "rgba(50,205,50,0.8)", "rgba(255,99,71,0.8)"];
  const borderColors = ["orange","darkseagreen", "darkgreen", "red" ];
  let colorIndex = 0;

  const {data:response, pending, error} = useFetch(URL);
  return (
        <div className="graphs">
          {error && <p>Error: {error}</p>}
          {pending && <p>Loading...</p>}
          {response && 
          <div>
            {/* Generate maps corresponding to all the sensors in the schema */}
            {response.schema.map((sensorName)=>{
              if(sensorName === "DTime"){
                return (<></>);
              }
              return(
                <>
                  <h3>{sensorName}</h3>
                  <GraphDisplay
                    labels = {response.values.map((value)=>{return value.DTime})} 
                    datapoints = {response.values.map((value)=>{return value[sensorName]})} 
                    title={sensorName} 
                    color={colors[colorIndex]}
                    border={borderColors[colorIndex++]}
                  />
                </>
              )
            })}
          </div>
            }
          {/* This makes sure that the child components are not called when response is null */}
        </div>
      );
}
