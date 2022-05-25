import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user.email)
    const email = user?.user?.email;
    useEffect(()=>{
    const currentUser = { email: email };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    }
    },[email])
    if (loading) {
        return <Loading></Loading>;
      }
    return (
        <div>
            hi arick
        </div>
    );
};

export default MyProfile;