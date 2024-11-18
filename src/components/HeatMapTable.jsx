import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const HeatmapGrid = () => {
    // Sample data: Rows for hours, columns for days with nested metrics
    const rowData = [
        { time: "12am", Sunday: { imp: 4372095, clicks: 27949, cpm: 64.42 }, Monday: { imp: 5225709, clicks: 31482, cpm: 83.31 }, Tuesday: { imp: 5225709, clicks: 31482, cpm: 48.31 }, Wednesday: { imp: 5225709, clicks: 31482, cpm: 98.31 }, Thursday: { imp: 5225709, clicks: 31482, cpm: 77.31 }, Friday: { imp: 5225709, clicks: 31482, cpm: 83.91 }, Saturday: { imp: 5225709, clicks: 31482, cpm: 33.34 } },
        { time: "1am", Sunday: { imp: 628926, clicks: 11406, cpm: 13.38 }, Monday: { imp: 728926, clicks: 12106, cpm: 21.12 }, Tuesday: { imp: 5225709, clicks: 31482, cpm: 48.31 }, Wednesday: { imp: 5225709, clicks: 31482, cpm: 98.31 }, Thursday: { imp: 5225709, clicks: 31482, cpm: 77.31 }, Friday: { imp: 5225709, clicks: 31482, cpm: 83.91 }, Saturday: { imp: 5225709, clicks: 31482, cpm: 33.34 } },
        { time: "2am", Sunday: { imp: 123456, clicks: 2345, cpm: 10.55 }, Monday: { imp: 928926, clicks: 19406, cpm: 43.38 }, Tuesday: { imp: 5225709, clicks: 31482, cpm: 48.31 }, Wednesday: { imp: 5225709, clicks: 31482, cpm: 98.31 }, Thursday: { imp: 5225709, clicks: 31482, cpm: 77.31 }, Friday: { imp: 5225709, clicks: 31482, cpm: 83.91 }, Saturday: { imp: 5225709, clicks: 31482, cpm: 33.34 } },
        { time: "3am", Sunday: { imp: 67890, clicks: 987, cpm: 18.23 }, Monday: { imp: 628926, clicks: 11406, cpm: 13.38 }, Tuesday: { imp: 5225709, clicks: 31482, cpm: 48.31 }, Wednesday: { imp: 5225709, clicks: 31482, cpm: 98.31 }, Thursday: { imp: 5225709, clicks: 31482, cpm: 77.31 }, Friday: { imp: 5225709, clicks: 31482, cpm: 83.91 }, Saturday: { imp: 5225709, clicks: 31482, cpm: 33.34 } },
        { time: "4am", Sunday: { imp: 28934, clicks: 943, cpm: 9.55 }, Monday: { imp: 450000, clicks: 12345, cpm: 25.44 }, Tuesday: { imp: 5225709, clicks: 31482, cpm: 48.31 }, Wednesday: { imp: 5225709, clicks: 31482, cpm: 98.31 }, Thursday: { imp: 5225709, clicks: 31482, cpm: 77.31 }, Friday: { imp: 5225709, clicks: 31482, cpm: 83.91 }, Saturday: { imp: 5225709, clicks: 31482, cpm: 33.34 } },
        { time: "5am", Sunday: { imp: 13000, clicks: 100, cpm: 3.75 }, Monday: { imp: 20000, clicks: 400, cpm: 8.42 }, Tuesday: { imp: 5225709, clicks: 31482, cpm: 48.31 }, Wednesday: { imp: 5225709, clicks: 31482, cpm: 98.31 }, Thursday: { imp: 5225709, clicks: 31482, cpm: 77.31 }, Friday: { imp: 5225709, clicks: 31482, cpm: 83.91 }, Saturday: { imp: 5225709, clicks: 31482, cpm: 33.34 } },
        { time: "6am", Sunday: { imp: 25000, clicks: 432, cpm: 12.55 }, Monday: { imp: 50000, clicks: 800, cpm: 25.5 }, Tuesday: { imp: 5225709, clicks: 31482, cpm: 48.31 }, Wednesday: { imp: 5225709, clicks: 31482, cpm: 98.31 }, Thursday: { imp: 5225709, clicks: 31482, cpm: 77.31 }, Friday: { imp: 5225709, clicks: 31482, cpm: 83.91 }, Saturday: { imp: 5225709, clicks: 31482, cpm: 33.34 } },
        { time: "7am", Sunday: { imp: 100000, clicks: 1020, cpm: 50.8 }, Monday: { imp: 150000, clicks: 2100, cpm: 60.31 }, Tuesday: { imp: 5225709, clicks: 31482, cpm: 48.31 }, Wednesday: { imp: 5225709, clicks: 31482, cpm: 98.31 }, Thursday: { imp: 5225709, clicks: 31482, cpm: 77.31 }, Friday: { imp: 5225709, clicks: 31482, cpm: 83.91 }, Saturday: { imp: 5225709, clicks: 31482, cpm: 33.34 } },
        { time: "8am", Sunday: { imp: 125000, clicks: 1500, cpm: 70.0 }, Monday: { imp: 180000, clicks: 2300, cpm: 80.8 }, Tuesday: { imp: 5225709, clicks: 31482, cpm: 48.31 }, Wednesday: { imp: 5225709, clicks: 31482, cpm: 98.31 }, Thursday: { imp: 5225709, clicks: 31482, cpm: 77.31 }, Friday: { imp: 5225709, clicks: 31482, cpm: 83.91 }, Saturday: { imp: 5225709, clicks: 31482, cpm: 33.34 } },
        { time: "9am", Sunday: { imp: 160000, clicks: 1700, cpm: 85.3 }, Monday: { imp: 200000, clicks: 2700, cpm: 95.5 }, Tuesday: { imp: 300000, clicks: 3500, cpm: 120.5 }, Wednesday: { imp: 500000, clicks: 4500, cpm: 140.0 }, Thursday: { imp: 600000, clicks: 5200, cpm: 150.2 }, Friday: { imp: 700000, clicks: 6000, cpm: 160.3 }, Saturday: { imp: 800000, clicks: 7000, cpm: 180.0 } },
        { time: "10am", Sunday: { imp: 200000, clicks: 2000, cpm: 100.0 }, Monday: { imp: 300000, clicks: 3500, cpm: 120.0 }, Tuesday: { imp: 400000, clicks: 4000, cpm: 150.0 }, Wednesday: { imp: 500000, clicks: 4500, cpm: 180.0 }, Thursday: { imp: 600000, clicks: 5000, cpm: 200.0 }, Friday: { imp: 700000, clicks: 5500, cpm: 220.0 }, Saturday: { imp: 800000, clicks: 6000, cpm: 240.0 } },
        { time: "11am", Sunday: { imp: 230000, clicks: 2500, cpm: 115.5 }, Monday: { imp: 350000, clicks: 4000, cpm: 135.0 }, Tuesday: { imp: 450000, clicks: 4500, cpm: 155.0 }, Wednesday: { imp: 550000, clicks: 5000, cpm: 175.0 }, Thursday: { imp: 650000, clicks: 5500, cpm: 195.0 }, Friday: { imp: 750000, clicks: 6000, cpm: 215.0 }, Saturday: { imp: 850000, clicks: 6500, cpm: 235.0 } },
    ];
    // Heatmap-style conditional formatting
    const heatmapStyle = (params) => {
        if (params.value == null || params.value === "") {
            return null;
        }

        const value = Number(params.value);
        let backgroundColor;

        if (value <= 20) {
            backgroundColor = "#add8e6"; // Light Blue
        } else if (value <= 50) {
            backgroundColor = "#ffb6c1"; // Light Pink
        } else if (value <= 100) {
            backgroundColor = "#dda0dd"; // Light Violet
        } else {
            backgroundColor = "#d8bfd8"; // Thistle (soft violet/pink mix)
        }

        return { backgroundColor, color: "#000" };
    };


    // Define column definitions
    const columnDefs = [
        { headerName: "Time", field: "time", pinned: "left" },
        {
            headerName: "Sunday",
            children: [
                { headerName: "Imp", field: "Sunday.imp", cellStyle: heatmapStyle },
                { headerName: "Clicks", field: "Sunday.clicks", cellStyle: heatmapStyle },
                { headerName: "CPM", field: "Sunday.cpm", cellStyle: heatmapStyle },
            ],
        },
        {
            headerName: "Monday",
            children: [
                { headerName: "Imp", field: "Monday.imp", cellStyle: heatmapStyle },
                { headerName: "Clicks", field: "Monday.clicks", cellStyle: heatmapStyle },
                { headerName: "CPM", field: "Monday.cpm", cellStyle: heatmapStyle },
            ],
        },
        {
            headerName: "Tuesday",
            children: [
                { headerName: "Imp", field: "Monday.imp", cellStyle: heatmapStyle },
                { headerName: "Clicks", field: "Monday.clicks", cellStyle: heatmapStyle },
                { headerName: "CPM", field: "Monday.cpm", cellStyle: heatmapStyle },
            ],
        },
        {
            headerName: "Wednesday",
            children: [
                { headerName: "Imp", field: "Monday.imp", cellStyle: heatmapStyle },
                { headerName: "Clicks", field: "Monday.clicks", cellStyle: heatmapStyle },
                { headerName: "CPM", field: "Monday.cpm", cellStyle: heatmapStyle },
            ],
        },
        {
            headerName: "Thursday",
            children: [
                { headerName: "Imp", field: "Monday.imp", cellStyle: heatmapStyle },
                { headerName: "Clicks", field: "Monday.clicks", cellStyle: heatmapStyle },
                { headerName: "CPM", field: "Monday.cpm", cellStyle: heatmapStyle },
            ],
        },
        {
            headerName: "Friday",
            children: [
                { headerName: "Imp", field: "Monday.imp", cellStyle: heatmapStyle },
                { headerName: "Clicks", field: "Monday.clicks", cellStyle: heatmapStyle },
                { headerName: "CPM", field: "Monday.cpm", cellStyle: heatmapStyle },
            ],
        },
        {
            headerName: "Saturday",
            children: [
                { headerName: "Imp", field: "Monday.imp", cellStyle: heatmapStyle },
                { headerName: "Clicks", field: "Monday.clicks", cellStyle: heatmapStyle },
                { headerName: "CPM", field: "Monday.cpm", cellStyle: heatmapStyle },
            ],
        },
    ];

    const gridOptions = {
        defaultColDef: {
            resizable: true,
        },
        domLayout: "autoHeight",

        // onGridReady: (params) => {// Can see all the columns at view port
        //   params.api.sizeColumnsToFit(); // Resize columns to fit the viewport
        // },
    };


    // Calculate totals for each day
    const calculateTotal = (day, field) => {
        let sum = 0
        console.log(rowData,'row data in calculate')
        for (let row of rowData) {
            sum += (row[day][field]) || 0
        }
        return sum
    };

    // Calculate totals for all days
    const totalRow = {
        time: "Total",
        Sunday: { imp: calculateTotal("Sunday", "imp"), clicks: calculateTotal("Sunday", "clicks"), cpm: calculateTotal("Sunday", "cpm") },
        Monday: { imp: calculateTotal("Monday", "imp"), clicks: calculateTotal("Monday", "clicks"), cpm: calculateTotal("Monday", "cpm") },
        Tuesday: { imp: calculateTotal("Tuesday", "imp"), clicks: calculateTotal("Tuesday", "clicks"), cpm: calculateTotal("Tuesday", "cpm") },
        Wednesday: { imp: calculateTotal("Wednesday", "imp"), clicks: calculateTotal("Wednesday", "clicks"), cpm: calculateTotal("Wednesday", "cpm") },
        Thursday: { imp: calculateTotal("Thursday", "imp"), clicks: calculateTotal("Thursday", "clicks"), cpm: calculateTotal("Thursday", "cpm") },
        Friday: { imp: calculateTotal("Friday", "imp"), clicks: calculateTotal("Friday", "clicks"), cpm: calculateTotal("Friday", "cpm") },
        Saturday: { imp: calculateTotal("Saturday", "imp"), clicks: calculateTotal("Saturday", "clicks"), cpm: calculateTotal("Saturday", "cpm") },
    };



    // Add the total row at the end of rowData
    const rowDataWithTotal = [...rowData, totalRow];




    return (

        <div className="ag-theme-alpine container" style={{ height: 600, width: "100%", borderRadius: "2%" }}>
            <AgGridReact
                gridOptions={gridOptions}
                columnDefs={columnDefs}
                rowData={rowDataWithTotal}
            />
        </div>
    );
};

export default HeatmapGrid;
