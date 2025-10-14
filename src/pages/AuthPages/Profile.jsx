import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../provider/AuthContext';

const Profile = () => {
    const {user}=useContext(AuthContext);
    return (
        <div className='w-11/12 space-y-3 mx-auto px-1 my-15 md:my-25'>
            <Helmet>
                <title>
                    Profile || CSEJU
                </title>
            </Helmet>
            <div className=' bg-gray-100 py-8 px-1 md:py-15 rounded-sm'>
                <img className='mx-auto border p-1 rounded-full mb-5 w-[200px]' src={user?.photoURL} alt="" />
                <p className='text-center'>Email : <span className='text-blue-700'>{user?.email}</span></p>
                <p className='text-center'>Username : <span className='text-blue-700'>{user?.displayName}</span></p>
                <p className='text-center'> Account Created : <span className='text-blue-700'>{user?.metadata?.creationTime}</span></p>
                <p className='text-center'>Last Login : <span className='text-blue-700'>{user?.metadata?.lastSignInTime}</span></p>

            </div>
        </div>
    );
};

export default Profile;