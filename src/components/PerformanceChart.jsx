import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styles from "./PerformanceChart.module.css";
import MetricsDropdown from './MetricsDropdown';
import { CLICKS_CHART_DATA, CPM_CHART_DATA, CTR_CHART_DATA, IMPRESSIONS_CHART_DATA, METRICS, REVENUE_CHART_DATA, SPEND_CHART_DATA } from './constant';


const PerformanceChart = () => {
    const [data, setChartData] = useState(SPEND_CHART_DATA)
    const [selectedMetrics, setSelectedMetrics] = useState([METRICS.Spend]);

    const handleApplyMetrics = (metrics) => {
        setSelectedMetrics(metrics);
        const metricsDataMap = {
            [METRICS.Spend]: SPEND_CHART_DATA,
            [METRICS.REVENUE]: REVENUE_CHART_DATA,
            [METRICS.CLICKS]: CLICKS_CHART_DATA,
            [METRICS.IMPRESSIONS]: IMPRESSIONS_CHART_DATA,
            [METRICS.CMP]: CPM_CHART_DATA,
            [METRICS.CTR]: CTR_CHART_DATA,
        };

        // Aggregate selected data
        const newChartData = metrics.map(metric => metricsDataMap[metric] || []).flat();

        setChartData(newChartData);
    };

    return (
        <div className={styles.container}>
            <div className={styles.headingContainer}>
                <div>
                    <h2>
                        Performence Chart
                    </h2>
                    <p>Key Metrics for Displaying Schedule Performence Evaluation</p>
                </div>
                <div>

                    <MetricsDropdown setChartData={setChartData} selectedMetrics={selectedMetrics} onApply={handleApplyMetrics} />
                </div>
            </div>
            <hr />

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    <Line type="monotone" dataKey="value2" stroke="#DFFF00" />
                    <Line type="monotone" dataKey="value3" stroke="#FFBF00" />
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}

export default PerformanceChart
