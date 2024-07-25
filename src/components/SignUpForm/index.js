import React, { useState } from 'react';
import { signUp } from '../../lib/apiService';
import {Redirect} from 'react-router'

const handleSubmitForm = async (e, form, setForm, setIsSignedUp) => {
        e.preventDefault()
        const { lastName, firstName, email, password } = form.form;
            
        try {
            await signUp({lastName, firstName, email, password});
            setIsSignedUp(true);
        } catch(e) {

            form["showError"] = true;
            setForm(form);
        }
}
const handleTextInput = (e, form, setForm) => {
    const { name, value } = e.target
    form.form[name] = value;
    setForm({
        form: form.form
    });
}

const SignUpForm = () => {
    
    const [form, setForm] = useState({
        form:{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            showError: false
        }
    });

    const [isSignedUp, setIsSignedUp] = useState(false);
    console.log(form)
    
    if (isSignedUp) {
        return <Redirect to="/login" />
    }else {
        return(
            <div>
                <p className="sign-form-title">Let's start with creating your <br/> account</p>
                <form className = "form" onSubmit={(e) => {
                    handleSubmitForm(e, form, setForm, setIsSignedUp);
                }}>
                    <div>
                        <label>FirstName</label>
                        <input 
                            type="text" 
                            name='firstName'
                            onChange={(e) => {
                                handleTextInput(e, form, setForm);
                            }}
                            value={form.firstName}
                        />
                    </div>
                    <div>
                        <label>LastName</label>
                        <input 
                            type="text" 
                            name='lastName'
                            onChange={(e) => {
                                handleTextInput(e, form, setForm);
                            }}
                            value={form.lastName}
                        />
                    </div>
    
                    <div>
                        <label>Email Address</label>
                        <input 
                        type="text" 
                        name="email"
                        onChange={(e) => {
                            handleTextInput(e, form, setForm);
                        }}
                        value={form.email}/>
                    </div>
    
                    <div>
                        <label>password</label>
                        <input 
                        type="password" 
                        name="password"
                        onChange={(e)=> {
                            handleTextInput(e, form, setForm);
                        }}
                        value={form.password} />
                    </div>
    
                    <button className="sign-up-button">CONTINUE</button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
