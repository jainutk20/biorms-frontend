import React from 'react'

import useFetch from '../../useFetch';
import GraphDisplay from '../graphDisplay/GraphDisplay';

import './graphs.css'
export default function Graphs() {
  const {data:sensors, pending, error} = useFetch('http://localhost:5000/reactor1/batch?batchsize=10');
  return (
        <div className="graphs">
          {error && <p>Error: {error}</p>}
          {pending && <p>Loading...</p>}
          {sensors && 
          <div>
            <h3>PH100</h3>
            <GraphDisplay
              labels = {sensors.map((sensor)=>{return sensor.DTime})} 
              datapoints = {sensors.map((sensor)=>{return sensor.PH100})} 
              title="PH100" 
              color="rgba(255,100,0,0.8)" 
              border="orange"
            />

            <h3>PI100</h3>
            <GraphDisplay 
              labels = {sensors.map((sensor)=>{return sensor.DTime})} 
              datapoints = {sensors.map((sensor)=>{return sensor.PI100})} 
              title="PI100" 
              color="rgba(5, 105, 107,0.8)" 
              border="darkseagreen"
            />

            <h3>TI100_PV</h3>
            <GraphDisplay
              labels = {sensors.map((sensor)=>{return sensor.DTime})}  
              datapoints = {sensors.map((sensor)=>{return sensor.TI100_PV})} 
              title="TI100_PV" 
              color="rgba(50,205,50,0.8)" 
              border="darkgreen"
            />

            <h3>TI100_SP</h3>
            <GraphDisplay
              labels = {sensors.map((sensor)=>{return sensor.DTime})}  
              datapoints = {sensors.map((sensor)=>{return sensor.TI100_SP})} 
              title="TI100_SP" 
              color="rgba(255,99,71,0.8)" 
              border="red"/>
          </div>
            }
          {/* This makes sure that the child components are not called when sensors is null */}
        </div>
      );
}
