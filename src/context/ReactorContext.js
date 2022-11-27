import {  useState,createContext } from "react";

const ReactorContext = createContext();

function ReactorContextProvider(props) {
    const [reactorNum, setReactorNum] = useState('reactor1');
    const [batchSize, setBatchSize] = useState('10');
    // Create useStates here and insert them in value, import ReactorContext and extract them from there.
    return (
    <ReactorContext.Provider
        value={{
        reactorNum,
        setReactorNum,
        batchSize,
        setBatchSize
        }}
    >
        {props.children}
    </ReactorContext.Provider>
    );
}

export default ReactorContext;
export { ReactorContextProvider };