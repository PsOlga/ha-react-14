
import { useState } from "react";
import { changeUser } from "../../redux/actoins";
import { connect } from "react-redux";
import styles from "./styles.module.css";
function UserForm({newUser}) {

    const [user, setUser] = useState({name: "", status: ""});

   function handleChange(event) {
    console.log(event);
    const  {name, value} = event.target;
    setUser({...user, [name]: value});
   }

   function handleSubmit(event){
    event.preventDefault();
    console.log(user);
    newUser(user);
    setUser({name: "", status: ""});
    
   };
    return (
      <div className={styles.containerForm}>
    
        <form onSubmit={handleSubmit}
        className={styles.userForm}>
            <h4>Edit User Information</h4>
            <input 
            name="name" 
            type="text" 
            value={user.name}
            onChange={handleChange}
            placeholder="name"
            className={styles.userInp}
            />
       
            <input 
            name="status" 
            type="text" 
            value={user.status}
            onChange={handleChange}
            placeholder="status"
            className={styles.userInp}
            />
            <button className={styles.btnSubmit} type="submit">Submit</button>
        </form>
        </div>
    )
}
const mapDispatchToProps = (dispatch) =>( {
newUser: newData =>
    dispatch(changeUser(newData)),

});
export default connect(null, mapDispatchToProps)(UserForm);



