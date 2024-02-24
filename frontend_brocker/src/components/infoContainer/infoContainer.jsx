import styles from "./infoContainer.module.css";
import InfoTextContainer from "../../components/InfoTextContainer/InfoTextContainer";
import { useSocketData } from "../../hooks/useSocketData";
function InfoContainer() {
  const { data, isLoading } = useSocketData();
  console.log(data);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <InfoTextContainer content={"Cargando datos..."} />
      ) : (
        <>
          <InfoTextContainer number={`${data?.humedad}%`} content={"Humedad"} />
          <InfoTextContainer
            number={`${parseInt(data?.temperatura, 10)}°C`}
            content={"Temperatura"}
          />
          <InfoTextContainer
            number={data?.fototransistor}
            content={"Fototransistor"}
          />
        </>
      )}
    </div>
  );
}

export default InfoContainer;
