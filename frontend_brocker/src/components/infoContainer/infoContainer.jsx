import React from "react";
import styles from "./infoContainer.module.css";
import { useSocketData } from "../../hooks/useSocketData";

function InfoContainer() {
  const { data, isLoading } = useSocketData();
  console.log(data)
  return <div className={styles.container}></div>;
}

export default InfoContainer;
