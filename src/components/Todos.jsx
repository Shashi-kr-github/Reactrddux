import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addTodoError, addTodoLoading, addTodoSucess, getTodoError, getTodoLoading, getTodoSucess } from "../stores/action";
import axios from "axios"


export const TODOS = () => {
      useEffect(() => {
          getData();
      },[])
    const getData = async () => {
        dispatch(getTodoLoading());
        try {
            const {data}  = await axios.get("http://localhost:3001/todos");
            dispatch(getTodoSucess(data));

        }catch(error) {
             dispatch(getTodoError(error));
        }
    }
      const dispatch = useDispatch();
      const {loading , error, data} = useSelector(store => store.todos);
     
      const [text , setText] = useState("")
    return loading ? ("Loading..."): (
        <div>
            <input value ={text} type="text" placeholder ="enter todo" onChange = {e => setText(e.target.value)} />
            <button
            onClick = { async  () => {
                dispatch(addTodoLoading());
                const payload = {
                    status : false,
                    title: text,
                };
                try {
                    const {data} = await  axios.post("http://localhost:3001/todos" ,  payload);

                    
                    dispatch(addTodoSucess(data))
                }catch (err) {
                       dispatch(addTodoError(err));
                }
       // dispatch(addtodo(payload));
      }}
            >
                ADD Todo
                </button>

            {data.map((e,i) => (
                <div key = {i}>{e.title}</div>
            ))}
        </div>
    );
}