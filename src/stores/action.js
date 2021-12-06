import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCESS,  } from "./actionType.js"
//import { ADD_TODO_ERRORB, ADD_TODO_LOADINGB,ADD_TODO_SUCESSB} from "./actionType.js";
 import { DEC_COUNT,INC_COUNT } from "./actionType.js"

 
 
 
 

 export const incCounter = (data) =>({type : INC_COUNT,payload : data,})

 export const decCounter = (data) => ({ type: DEC_COUNT ,payload: data,});

//  export const addtodo = (data) => ({type : TODO, payload : data});
//  export const addtodoB = (data) => ({ type: TODOB, payload: data });

 export const addTodoLoading = () => ({type : ADD_TODO_LOADING});
 export const addTodoSucess = (data) => ({ type: ADD_TODO_SUCESS ,payload : data });
 export const addTodoError = (err) => ({ type: ADD_TODO_ERROR, payload: err});

//  export const addTodoLoadingb = () => ({ type: ADD_TODO_LOADINGB });
//  export const addTodoSucessb = (data) => ({type: ADD_TODO_SUCESSB,payload: data,});
//  export const addTodoErrorb = (err) => ({ type: ADD_TODO_ERRORB, payload: err });

//  ///GET
 export const getTodoLoading = () => ({ type: GET_TODO_LOADING });
 export const getTodoSucess = (data) => ({
   type: GET_TODO_SUCESS,
   payload: data,
 });
 export const getTodoError = (err) => ({ type: GET_TODO_ERROR, payload: err });
