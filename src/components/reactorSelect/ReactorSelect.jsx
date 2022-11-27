import { useContext, useState } from "react";
import ReactorContext from "../../context/ReactorContext.js";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Alert } from "@mui/material";


const reactors = [
    {
      value: 'reactor1',
      label: 'Reactor 1',
    },
    {
        value: 'reactor2',
        label: 'Reactor 2',
    },
    {
        value: 'reactor3',
        label: 'Reactor 3',
    },
    {
        value: 'reactor4',
        label: 'Reactor 4',
    },
  ];



const ReactorSelect = ({
        setPending
    }) =>{
    const {reactorNum, setReactorNum, batchSize, setBatchSize} = useContext(ReactorContext);
    const [localNum, setLocalNum] = useState(reactorNum);
    const [localSize, setLocalSize] = useState(batchSize);

    // Callback for reactorNum
    const handleSelect = (event)=>{
        setLocalNum(event.target.value);
    }

    // Callback for batchSize  
    const handleText = (event)=>{
        setLocalSize(event.target.value);
    }

    // Callback for refresh button
    const onRefresh = (event)=>{
        if(localNum===reactorNum && localSize===batchSize){
            return;
        }
        setReactorNum(localNum);
        setBatchSize(localSize);
        setPending(true);
    }
    return(
    <>
        <Box 
            sx={{ marginBottom:"10px",
                  marginTop:"30px",
                  width:400, 
                  display:"flex", 
                  justifyContent:"space-between"}}
            >

            <TextField
                id="reactor-num"
                select
                label="Reactor number"
                value={localNum}
                onChange={handleSelect}
                >
                {reactors.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField 
                id="batch-size"
                type="number" 
                label="Batch size" 
                variant="outlined" 
                defaultValue={batchSize}
                onChange={handleText}
                sx={{width:100}}
            />
            <Button 
                id="refresh-btn"
                variant="contained"
                onClick={onRefresh}
                >
                    Refresh
            </Button>
            
        </Box>
        <Alert severity="info">Enter batch size = 0 (non-positive) to get all sensor values.</Alert>
    </>
    )

};

export default ReactorSelect;
