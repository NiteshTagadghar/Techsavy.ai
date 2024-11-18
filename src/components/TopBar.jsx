// src/components/TopBar.js
import React from "react";
import styles from "./TopBar.module.css";
import { useNavigate } from "react-router-dom";

const TopBar = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate("/")
    }
    return (
        <div className={styles.topBar}
        >
            <h1 className={styles.logo}>Dashboard</h1>
            <button onClick={logout}>Log out</button>
        </div>
    );
};

export default TopBar;
