import React from 'react';

const UserOutput = (props) => {
    return(
        <div>
            <p style={styles.paragraphStyle}>{props.name}</p>
            <p>welcome to react</p>
        </div>
    );
}


const styles={
    paragraphStyle:{
        fontSize:'25px',
        fontWeight:'200'
    }
}

export default UserOutput;