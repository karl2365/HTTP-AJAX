import React from 'react';
import './components.scss';

function Friends(props) {
 
    if(!props.friends){
        return(
            <h1>Loading</h1>
        )
    }else{
        console.log(props.friends)
        return (
            <div className="container">
                <div className="friendsContainer">
                    <h1>My Friends</h1>
                    {props.friends.map(friend => (
                        <div className="friendItem">
                            <h2 className="item">Name: {friend.name}</h2>
                            <p className="item">Age: {friend.age}</p>
                            <p className="item">Email: {friend.email}</p>
                        </div>
                    ))}
                    
                </div>
                <form>
                    <h1>Add New Friend</h1>    
                    <div className="formInput">
                        <div>
                            <label>Name: &nbsp;</label>
                                <input type="text" placeholder="name" />
                        </div>
                        <div>    
                            <label>Age: &nbsp;</label>
                                <input type="number" placeholder="age" />
                        </div>
                        <div>
                            <label>Email: &nbsp;</label>
                                <input type="email" placeholder="email" />
                        </div>
                    </div>
                    <button type="submit">Add Friend</button>
                 </form>
            </div>
        )
    }
}






export default Friends
