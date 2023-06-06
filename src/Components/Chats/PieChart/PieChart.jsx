import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { chartData } from '../../../Constant/Constant';
import Fade from "react-reveal/Fade";
import { httpRequest } from '../../../Service/Service';
import { pieUrl } from '../../../Service/url';
const PieChart = () => {

    // this is for charts/pie/graph api functionality   
    // const [chartDatas, setChartDatas] = useState(null);
    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await httpRequest(pieUrl, 'GET');
    //         const data = response.data;
    //         setChartDatas(data);
    //     } catch (error) {
    //         console.error('Error fetching in data:', error);
    //     }
    // };
    return (
        <div >
            <div>
                <Fade left duration={1000}>
                    <div style={{ padding: "0 0 80px 100px" }}>
                        <h2>Powered by
                            custom A.I.</h2>
                        <p>We combine Machine Learning, Natural Language Processing and lightning fast databases for results which are up-to-date and accurate.</p>
                    </div>
                    <ReactApexChart
                        options={chartData.options}
                        series={chartData.Team}
                        type="pie"
                    />
                </Fade>
            </div>
        </div>
    )
}

export default PieChart