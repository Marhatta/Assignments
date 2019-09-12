import React,{useState,useEffect,useReducer,useRef} from 'react';
import axios from 'axios';

const Todo = props => {

    //here inputState will be an array
    //Because useState hook returns two things
    //first thing is the initial state i.e the whole state
    //second is a function() which can be used to manipulate the state

    //const [todoName,setTodoName] = useState('');
    //const [submittedTodo,setSubmittedTodo] = useState(null);
    // const [todoList , setTodoList] = useState([]);

    const todoInputRef = useRef();

     //useReducer hook
     //React always gives you the latest state in there
     const todoListReducer = (state,action) => {
        switch(action.type){
            case 'ADD' :
                return state.concat(action.payload);
            case 'SET' :
                return action.payload;
            case 'REMOVE' :
                return state.filter((todo) => todo.id !== action.payload.id);
            default:
                return state;
        }
    }

    const [todoList,dispatch] = useReducer(todoListReducer,[]);


    //runs after every render cycle
    //If you want to restrict its running cycle , pass the second argument in []
    //hence it will run only if the value in [] changed
    //passing an empty [] will make it run only once
    useEffect(() => {
        axios.get('https://test-8eb9d.firebaseio.com/todos.json')
            .then(result=>{
                console.log(result);
                const todoData = result.data;
                const todos = [];
                for(const key in todoData){
                    todos.push({id:key,name:todoData[key].name});
                }
                dispatch({type:'SET',payload:todos});
            });

            //can be used for cleanup
            //executes before 
            return () => {
                console.log('cleanup');
            }
    },[]);

    // const mouseMoveHandler = event =>  {
    //     console.log(event.clientX,event.clientY);
    // };

   

    // useEffect(() => {
    //     document.addEventListener('mousemove',mouseMoveHandler);

    //     //clean up old event listener 
    //     return () => {
    //         document.removeEventListener('mousemove',mouseMoveHandler);
    //     };
    // },[]);


    // const inputChangeHandler = (event) => {
    //     setTodoName(event.target.value);
    // }

    const todoAddHandler = () => {

        const todoName = todoInputRef.current.value;
       
        axios.post('https://test-8eb9d.firebaseio.com/todos.json',{name:todoName})
            .then(res=>{
                const todoItem = {id:res.data.name,name:todoName};
                dispatch({type:'ADD',payload:todoItem});
                console.log(res);
            })
            .catch(error=>{
                console.log(error);
            })
    }

    const todoRemoveHandler = todoId => {
        axios.delete(`https://test-8eb9d.firebaseio.com/todos/${todoId}.json`)
            .then(res=>{
                dispatch({type:'REMOVE',payload:todoId});
            })
            .catch(err=>console.log(err));
    }

    return <React.Fragment>
        <input 
            type='text' 
            placeholder='Todo' 
            ref={todoInputRef}
        />
        <button type='button' onClick={todoAddHandler}>Add</button>
        <ul>
            {todoList.map(todo=>{
                return <li key={todo.id} onClick={todoRemoveHandler.bind(this,todo.id)}>{todo.name}</li>
            })}
        </ul>
    </React.Fragment>
}

export default Todo;