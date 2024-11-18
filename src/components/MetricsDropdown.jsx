
import React, { useState } from "react";
import "./MetricsDropdown.css";
import { METRICS } from "./constant";

const metricsOptions = [
  { id: 1, label: METRICS.Spend },
  { id: 2, label: METRICS.REVENUE},
  { id: 3, label: METRICS.IMPRESSIONS},
  { id: 4, label: METRICS.CLICKS },
  { id: 6, label: METRICS.CMP},
  { id: 5, label: METRICS.CTR},
];

const MetricsDropdown = ({ selectedMetrics, onApply }) => {
  const [tempSelection, setTempSelection] = useState(selectedMetrics || []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleMetricChange = (metric) => {
    const updatedSelection = tempSelection.includes(metric)
      ? tempSelection.filter((m) => m !== metric)
      : [...tempSelection, metric];
    setTempSelection(updatedSelection);
  };

  const handleCancel = () => {
    setTempSelection(selectedMetrics);
    setIsDropdownOpen(false);
  };

  const handleApply = () => {
    onApply(tempSelection);
    // console.log(tempSelection,'temp selection')
    setIsDropdownOpen(false);
  };

  return (
    <div className="metrics-dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Select Metrics
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <ul>
            {metricsOptions.map((metric) => (
              <li key={metric.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={tempSelection.includes(metric.label)}
                    onChange={() => handleMetricChange(metric.label)}
                  />
                  {metric.label}
                </label>
              </li>
            ))}
          </ul>
          <div className="dropdown-actions">
            <button className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
            <button className="apply-button" onClick={handleApply}>
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetricsDropdown;
