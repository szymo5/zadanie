import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signin, signup } from "../utils/auth";

const initialsState = {username: "", email:'', password:'', confirmPassword:''};

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialsState);

    const navigate = useNavigate();

    const [isError, setIsError] = useState({errorType: '', error: false, errorMsg: ''});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignup){
            signup(formData, setIsError, navigate);
            console.log(formData);
        } else {
            signin(formData, setIsError, navigate);
            console.log(formData);
        }
    }

    const switchSign = () => {
        setIsSignup((prevState) => !prevState);
        setIsError({errorType: '', error: false, errorMsg: ''});
        setFormData(initialsState);
    }

    return ( 
        <div className="auth-container" style={{height: isSignup ? '255px' : '165px'}}>
            <span className="material-symbols-outlined">    
                lock
            </span>
            <h2 style={{color: '#555', marginTop: '10px'}}>{isSignup ?  'Rejestracja' : 'Logowanie'}</h2>
            <form className="flex" onSubmit={handleSubmit}>
                {(isError.errorType === "username" && isError.error) && <label className="label-error">{isError.errorMsg}</label>}
                <input type="text" name="username" value={formData.username} className={(isError.errorType === "username" && isError.error) ? "form-input  error" : "form-input"} placeholder="Nazwa użytkownika*"  onChange={handleChange}/>
                
                {(isSignup && isError.errorType === "email" && isError.error) && <label className="label-error">{isError.errorMsg}</label>}
                {isSignup && <input type="text" name="email" value={formData.email} className={(isError.errorType === "email" && isError.error) ? "form-input  error" : "form-input"} placeholder="Adres email*"  onChange={handleChange}/>}
                
                {(isError.errorType === "password" && isError.error) && <label className="label-error">{isError.errorMsg}</label>}
                <input type="password" name="password" value={formData.password} className={(isError.errorType === "password" && isError.error) ? "form-input  error" : "form-input"} placeholder="Hasło*"  onChange={handleChange}/>
                
                {(isSignup && isError.errorType === "confirmPassword" && isError.error) && <label className="label-error">{isError.errorMsg}</label>}
                {isSignup && <input type="confirmPassword" name="confirmPassword" value={formData.confirmPassword} className={(isError.errorType === "confirmPassword" && isError.error) ? "form-input  error" : "form-input"} placeholder="Powtórz hasło*"  onChange={handleChange}/>}
                
                <button type="submit" className="btn">{isSignup ?  'Zarejestruj się' : 'Zaloguj się'}</button>
            </form>
            <p style={{fontSize: '14px'}}>{isSignup ? 'Posiadasz konto? ' : 'Nie posiadasz konta? '}<b style={{cursor: 'pointer'}} onClick={switchSign}>{isSignup ? 'Zaloguj się' : 'Zarejestruj się'}</b></p>
        </div>
     );
}
 
export default Auth;
