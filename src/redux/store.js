
import {createStore} from "redux";
// Импортируем корневой редьюсер
import reducerUsInfo from "./redusers"; 
// Создаем Redux store
const store = createStore(reducerUsInfo);

export default store;



