import React,{Component,Fragment} from 'react';
import axios from 'axios';

import Task from '../Task/Task';

class Todo extends Component{

    state = {
        data:null,
        error:null
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                this.setState({data:response.data});
            })
            .catch(error => {
                this.setState({error:error});
            });
    }

    render(){

        let data = null;

        //check if the state has response data
        if(this.state.data){

            data = this.state.data.map(task => {
                return(
                    <Task 
                    key={task.id}
                    title={task.title}
                    completed={task.completed.toString()} //convert boolean to string
                    />
                );
            });
        }

        return(
            <Fragment>
                  <h1>Todo's</h1>
                    {data}
            </Fragment>
          );
    }
}


export default Todo;