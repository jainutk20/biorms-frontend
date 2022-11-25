import './sensorTable.css'

const SensorTable = ({schema, values, title}) => {
    var index = values.length;
    const sensorData = values.map(
        (value)=>{
            return(
                <tr key={index}>
                    <td>{index--}</td>
                    {/* Map values corresponding to different sensors mentioned in the schema */}
                    {schema.map((sensorName) =>{
                        return(
                        <td key={sensorName}>{value[sensorName]}</td>
                        )}
                    )}
                </tr>
            )
        }
    )
    return (
        <div className="sensor-list">
            <h2>{title}</h2>
            <table className='sensor-table'>
                <thead>
                    <tr>
                        <th>Index no.</th>
                        {/* List of all the sensor names present in the schema */}
                        {schema.map((sensorName) =>{
                            return(
                            <th key={sensorName}>{sensorName}</th>
                            )}
                        )}
                    </tr>
                </thead>
                <tbody>
                    {sensorData}
                </tbody>
            </table>

        </div>
    );
}
 
export default SensorTable;