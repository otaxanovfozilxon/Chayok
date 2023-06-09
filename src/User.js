import React from 'react'
import { Link } from 'react-router-dom';

function User({ users }) {
    console.log(users);
  return (
    <div>
        {
            users?.map(user =>(
                <div key={user.id} className="">
                    <Link to={`/user/${user.id}`} state={user}>
                    <h1>{user.name}</h1>
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default User