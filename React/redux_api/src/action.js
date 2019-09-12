import axios from 'axios';

export const saveData = (data) => {
    return {
        type:'FETCH_DATA',
        data:data 
       }
}

export const fetchData = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                dispatch(saveData(response.data));
            })
            .catch(error => {
                console.log('error is fetching data : ',error);
            })
    }
}