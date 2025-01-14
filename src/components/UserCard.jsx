import React from 'react';

const UserCard = (props)=>{
    return(
        <div className='user-card'>
            <img className='user-img'/>
            <h3>{props.data.name.first}</h3>
            <p>{props.data.phone}</p>
            <p>{props.data.city}</p>
        </div>
    )
}
export default UserCard