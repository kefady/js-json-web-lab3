import React from 'react';
import classes from "./ProfileCard.module.css";

import profile_picture from './profile_picture.jpg'

const NOT_FOUND_ERROR = 'Not found';

const ProfileCard = ({picture, country, email, phone, lat, lon}) => {
    return (
        <div className={classes.container}>
            <div className={classes.picture}>
                <img src={picture ?? profile_picture} alt="Profile_picture"/>
            </div>
            <div className={classes.infoBox}>
                <div className={classes.textBox}>
                    <h1>Country</h1>
                    <p>{country ?? NOT_FOUND_ERROR}</p>
                </div>
                <div className={classes.textBox}>
                    <h1>Phone</h1>
                    <p>{phone ?? NOT_FOUND_ERROR}</p>
                </div>
            </div>
            <div className={classes.emailBox}>
                <div className={classes.textBox}>
                    <h1>Email</h1>
                    <p>{email ?? NOT_FOUND_ERROR}</p>
                </div>
            </div>
            <div className={classes.infoBox}>
                <div className={classes.textBox}>
                    <h1>Latitude</h1>
                    <p>{lat ?? NOT_FOUND_ERROR}</p>
                </div>
                <div className={classes.textBox}>
                    <h1>Longitude</h1>
                    <p>{lon ?? NOT_FOUND_ERROR}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;