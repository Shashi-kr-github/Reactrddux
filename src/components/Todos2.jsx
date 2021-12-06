// import axios from "axios";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { addtodoB, addTodoErrorb, addTodoLoadingb, addTodoSucessb } from "../stores/action";




// export const TODOB = () => {
// const dispatch = useDispatch();
// const {loading, error, data} = useSelector(store => (store.todosb));

// const [text , setText] = useState("")

// return (
//     <div>
//         <input type = "text" placeholder = "add todo" onChange = {e => setText(e.target.value)}/>
//         <button
//         onClick = { async () => {
//             dispatch(addTodoLoadingb());
//             const payload = {
//                 status : false,
//                 title : text,
//             };
//             try {
//                     const {data} = await axios.post("http://localhost:3001/todos" , payload);
//                     dispatch(addTodoSucessb(data))

//             } catch (err) {
//                   dispatch(addTodoErrorb(err));
//             }
//           //  dispatch(addtodoB(payload))
//         }}
//         >ADD Todo</button>

//         {data.map((e,i) => (
//               <div key = {i}>{e.title}</div>
//         ))}
//     </div>
// );
// }