import React, { useState } from 'react'

import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import GraphDisplay from '../graphDisplay/GraphDisplay'
import axios from 'axios';

export default function Predict() {

  const [vs, setVs] = useState('');
  const [ts, setTs] = useState('');
  const [biogas, setBiogas] = useState('');
  const [predicted, setPredicted] = useState('');
  
  const days = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120]
  const biogasReadings = [0,100,120,100,100,90,50,40,30,30,40,40,40,30,30,80,80,70,50,70,90,90,75,65,100,120,90,75,100,50,60,65,50,40,20,10,70,90,80,70,40,30,20,20,30,80,90,100,95,80,70,80,70,50,40,50,60,60,50,40,40,30,20,60,40,30,30,30,50,10,40,20,30,10,30,40,20,30,20,20,15,20,10,20,30,20,25,40,35,40,20,15,20,25,25,30,35,20,25,30,20,10,10,10,30,30,20,50,30,30,20,40,30,20,30,20,30,20,10,10,10]

  const handleSubmit = () => {
    // logic to process input1, input2, and input3 and set output value

    setPredicted('Loading..');
    let X = [
    [-0.64783029, -0.5784963 , -0.50368232],
    [-0.65975731, -0.58629914, -0.86113429],
    [-0.67168432, -0.59410197, -0.50368232],
    [-0.68361134, -0.60190481, -0.86113429],
    [-0.69553836, -0.60970764, -0.50368232],
    [-0.70746538, -0.61751048, -0.86113429],
    [-0.71939239, -0.62531331, -1.21858626]]

    const [tsMean, vsMean, biogasMean] = [78.60167116,60.18542404, 44.09090909]
    const [tsStd, vsStd, biogasStd] = [88.03541948, 82.40594412, 27.97578646]
    
    const curr = [(ts-tsMean)/tsStd, (vs-vsMean)/vsStd, (biogas-biogasMean)/biogasStd]
    console.log(curr)
    X.push(curr)

    axios.post('http://localhost:5000/predict', [X])
        .then(response => setPredicted((response.data*biogasStd + biogasMean).toFixed(2)))
        .catch(e =>setPredicted('Error'))
  };

  
  return (
    <div className="sensors">
        <Alert severity="info">Enter Today's readings for VS, TS and Biogas values.</Alert>
        <Box 
          sx={{ marginBottom:"20px",
                marginTop:"30px",
                width:500, 
                display:"flex", 
                justifyContent:"space-between"}}
          >
          <TextField
            id="vs-input"
            label="VS"
            value={vs}
            sx={{width:100}}
            onChange={(e)=>{setVs(e.target.value)}}
          />

          <TextField
            id="ts-input"
            label="TS"
            value={ts}
            sx={{width:100}}
            onChange={(e)=>{setTs(e.target.value)}}
          />

          <TextField
            id="biogas-input"
            label="Biogas"
            value={biogas}
            sx={{width:100}}
            onChange={(e)=>{setBiogas(e.target.value)}}
          />
          
          <Button 
              id="predict-btn"
              variant="contained"
              sx={{width:100}}
              onClick={handleSubmit}
              >
                Predict
          </Button>
                  
        </Box>
        <p>Tomorrow's forecasted biogas:</p>
        <h2>{predicted}{(predicted!=='' && predicted!=='Loading..' && predicted!=='Error')?" ml":""}</h2>
        <hr style={{marginTop: "10px"}}/>
        <h3>Historical trend:</h3>
        <GraphDisplay
            labels = {days} 
            datapoints = {biogasReadings} 
            title={"Biogas values"} 
            color={"rgba(255,100,0,0.8)"}
            border={"orange"}
        />
        
    </div>
  )
}
