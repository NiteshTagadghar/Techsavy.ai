import React, { useState } from 'react'
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'
import MetricsDropdown from '../components/MetricsDropdown'
import PerformanceChart from '../components/PerformanceChart'
import HeatMapTable from '../components/HeatMapTable'
import styles from './MainPage.module.css'

const MainPage = () => {

    return (
        <div className={styles.mainPage}>
        <TopBar />
        <div className={styles.content}>
          <div className={styles.sideMenu}>
            <SideMenu />
          </div>
          <div className={styles.dashboard}>
            <PerformanceChart />
            <HeatMapTable />
          </div>
        </div>
      </div>
      
    )
}

export default MainPage
