import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
// import { directive } from '@babel/types';

import "firebase/app";
import { auth } from '../firebase';
import firebase from 'firebase/app';


//Login with Gooogle or Facebook 

const Login = () => {
    return (
        <div id="login-page">
            <div id = "login-card">
                <h2> Welcome to Microsoft Teams 🙋‍♀️ </h2>

                <div
                    className = "login-button google"
                    onClick = {() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} 
                >
                    <GoogleOutlined/> Sign in with Google

                </div>

                <br/> < br/>
                <div
                    className = "login-button facebook"
                    onClick = {() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())} 

                >
                    <FacebookOutlined/> Sign in with Facebook
                </div>
            </div>
        </div>
    );
}

export default Login;