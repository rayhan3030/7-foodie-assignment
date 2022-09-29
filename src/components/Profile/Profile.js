import React from 'react';
import profile from './profile.jpg'
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return (
        <div>
            <div className='profile'>
                <img src={profile} alt="" />
                <div>
                    <h4>Rayhan Ahmed Chy</h4>
                    <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon><small> Habiganj, Sylhet</small></p>
                </div>

            </div>
            <div className='profile-syntax'>
                <div>
                    <h3>80kg</h3> <p><small>Weight</small></p>
                </div>
                <div>
                    <h3>5.10</h3> <p><small>Height</small></p>
                </div>
                <div>
                    <h3>29yrs</h3> <p><small>Age</small></p>
                </div>
            </div>
        </div>
    );
};

export default Profile;