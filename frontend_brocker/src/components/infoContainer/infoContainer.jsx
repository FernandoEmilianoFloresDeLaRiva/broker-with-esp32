import styles from './InfoContainer.module.css';
import InfoTextContainer from "../../components/InfoTextContainer/InfoTextContainer"
function InfoContainer() {
  return (
    <div className={styles.container}>
      <InfoTextContainer number={'384'} content={'Successful projects'}/>
      <InfoTextContainer number={'386'} content={'Successful'}/>
      <InfoTextContainer number={'385'} content={'Successful projects'}/>
    </div>
  )
}

export default InfoContainer;
