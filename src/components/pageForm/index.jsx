import UserForm from "../userForm";
import User from "../user";
import styles from "./style.module.css"

function Page1 () {
    
    return(
    <div className={styles.containerPage}>
    <div >
    <h2 className={styles.titleForm}>User Profile</h2>
    </div>
    <div className={styles.divForm}>
    <h5 className={styles.userData}>User Information: </h5>
    <User  />
    
    <UserForm 
    
    />
    </div>
    </div>)
}
export default Page1;