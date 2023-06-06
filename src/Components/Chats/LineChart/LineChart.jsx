import React from 'react'
import Chart from "react-apexcharts";
import { schema } from './Schema';
import Zoom from 'react-reveal/Zoom';
const LineChart = () => {
    const [state] = React.useState(schema);
    return (
        <div className='py-5'>
            <Zoom>
                <Chart
                    options={state.options}
                    series={state.series}
                    type="line"
                    height="350"
                />
            </Zoom>
        </div>
    )
}

export default LineChart