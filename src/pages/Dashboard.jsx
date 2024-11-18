// import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import TopBar from "../components/TopBar";
// import MetricsDropdown from "../components/MetricsDropdown";
// import PerformanceChart from "../components/PerformanceChart";
// import HeatMapTable from "../components/HeatMapTable";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const [selectedMetrics, setSelectedMetrics] = useState(["Spend", "Revenue"]);

//   const handleApplyMetrics = (metrics) => {
//     setSelectedMetrics(metrics);
//   };

//   return (
//     <div className="dashboard">
//       <Sidebar />
//       <div className="main-content">
//         <TopBar />
//         <div className="content">
//           <MetricsDropdown
//             selectedMetrics={selectedMetrics}
//             onApply={handleApplyMetrics}
//           />
//           <PerformanceChart selectedMetrics={selectedMetrics} />
//           <HeatMapTable />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
