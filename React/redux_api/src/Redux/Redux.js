import React,{Component} from 'react';
import {connect} from 'react-redux';

import {fetchData} from '../action';

class Redux extends Component{
    render(){
        return (
            <div>
                <button onClick={() =>  this.props.fetch()}>Get Data</button>
                {this.props.data.map(user=>{
                    return <p key={user.id}>{user.name}</p>
                })}
            </div>
           
        );
    }
}

const mapStateToProps = state => {
    return {
        data:state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetch:()=>dispatch(fetchData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Redux);