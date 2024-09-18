import { connect } from "react-redux";
import styles from "./styles.module.css"

function User ({userData}) {
    return <div className={styles.userDataContainer}>
    <h5 className={styles.userName}>Name: {userData.name}</h5>
    <h5 className={styles.userStatus}> Status: {userData.status}</h5>
    
    </div>
}
// вытаскиваем первоначальное состояние из стора
const mapStateToProps = (state ) => ({
userData: state
});
export default connect(mapStateToProps)(User);




