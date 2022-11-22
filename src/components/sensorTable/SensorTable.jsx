import './sensorTable.css'

const SensorTable = ({sensors, title}) => {
    var index = sensors.length;
    const sensorData = sensors.map(
        (sensor)=>{
            // const date = sensor.updatedAt.split("T")[0];
            // const time = sensor.updatedAt.split("T")[1]

            return(
                <tr>
                    <td>{index--}</td>
                    <td>{sensor.DTime}</td>
                    <td>{sensor.PH100}</td>
                    <td>{sensor.PI100}</td>
                    <td>{sensor.TI100_PV}</td>
                    <td>{sensor.TI100_SP}</td>
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
                        <th >DTime</th>
                        <th >PH100</th>
                        <th >PI100</th>
                        <th >TI100_PV</th>
                        <th >TI100_SP</th>
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