import { CHANGE_USER_INFO } from "./actoins";
// создам начальное состояние User
const User = { name: "User name", status: "online"};


const reducerUsInfo = (state = User, action) => {
    if(action.type === CHANGE_USER_INFO ) {
    // state зарезервированное слово, возвращает текущее состояние
return {...state, 
    name: action.payload.name, 
    status: action.payload.status};
}
return state;
};
export default reducerUsInfo;