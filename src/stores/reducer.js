import { INC_COUNT, DEC_COUNT,TODO,ADD_TODO_LOADING, ADD_TODO_SUCESS, ADD_TODO_ERROR } from "./actionType.js";
import {
  GET_TODO_LOADING,
  GET_TODO_SUCESS,
  GET_TODO_ERROR,
} from "./actionType.js";



const initState = {
  count: 0,

  todos: {
    loading: false,
    data: [],
    error: false,
  },
  todosb: {
    loading : false,
    data: [],
    error: false,
  },
};


 export const reducer = ( state = initState , {type, payload}) => {
    // console.log(state)
      switch (type) {
        case INC_COUNT:
          return {
            ...state,
            count: state.count + payload,
          };
        case DEC_COUNT:
          return {
            ...state,
            count: state.count - payload,
          };
          case TODO : 
          return {
              ...state,
             
              todos: [...state.todos, payload],
          }
          // case TODOB : 
          // return {
          //     ...state,
          //     todosb : [...state.todosb,payload]
          // }
          case ADD_TODO_LOADING : 
            return {
              ...state,
              todos : {
                ...state.todos,
                loading: true,
              },
              
            };
          
          case ADD_TODO_SUCESS : 
            return {
              ...state,
              todos: {
                ...state.todos,
              loading : false,
                data: [...state.todos.data, payload],
              },
            };
            case ADD_TODO_ERROR : 
            return {
              ...state,
              todos :{
                  ...state.todos,
                 loading: false,
                  error : true,
              },
            };

            // case ADD_TODO_LOADINGB : 
            // return {
            //   ...state,
            //   todosb : {
            //     ...state.todosb,
            //     loading: true,
            //   },
            // };
            // case ADD_TODO_SUCESSB : 
            // return {
            //   ...state,
            //   todosb : {
            //     loading: false,
            //     data : [...state.todosb.data, payload]
            //   },
            // };
            // case ADD_TODO_ERRORB :
            // return{
            //    ...state,
            //    todosb : {
            //      ...state.todosb,
            //      loading: false,
            //      error : true,
            //    }
            // }
            case  GET_TODO_LOADING : 
            return {
              ...state,
              todos: {
                ...state.todos,
                loading: true,
              },
            };

            case GET_TODO_SUCESS : 
             return {
              ...state,
              todos : {
                loading : false,
                data : payload,
              }
            };

            case GET_TODO_ERROR : 
            return {
              ...state,
              todos :{
                  ...state.todos,
                  loading: false,
                  error : payload,
              }
            };
            

        
          default : return  {...state} ;
      }
}