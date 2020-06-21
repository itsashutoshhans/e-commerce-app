import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'
// here we use this as a functional component because we can maintain the 
// state in individual components (singn in and sign up) as they are not communicating with each other
// and it will cause an extra render if we maintain state here

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
    </div>
);

export default SignInAndSignUpPage;