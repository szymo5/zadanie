import { useState } from "react";

import { signUp } from "../utils/signUp";

const initialsState = {username: "", email:'', password:'', confirmPassword:''};

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialsState);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignup){
            //signUp(formData);
            console.log(formData);
        } else {
            console.log(formData);
        }
    }

    const switchSign = () => {
        setIsSignup((prevState) => !prevState);
    }

    return ( 
        <div className="auth-container" style={{height: isSignup ? '255px' : '150px'}}>
            <span className="material-symbols-outlined">    
                lock
            </span>
            <h2 style={{color: '#555', marginTop: '10px'}}>{isSignup ?  'Rejestracja' : 'Logowanie'}</h2>
            <form className="flex" onSubmit={handleSubmit}>
                <input type="text" name="username" className="form-input" placeholder="Nazwa użytkownika" required onChange={handleChange}/>
                {isSignup && <input type="text" name="email" className="form-input" placeholder="Adres email" required onChange={handleChange}/>}
                <input type="password" name="password" className="form-input" placeholder="Hasło" required onChange={handleChange}/>
                {isSignup && <input type="confirmPassword" name="confirmPassword" className="form-input" placeholder="Powtórz hasło" required onChange={handleChange}/>}
                <button type="submit" className="btn">{isSignup ?  'Zarejestruj się' : 'Zaloguj się'}</button>
            </form>
            <p style={{fontSize: '14px'}}>{isSignup ? 'Posiadasz konto? ' : 'Nie posiadasz konta? '}<b style={{cursor: 'pointer'}} onClick={switchSign}>{isSignup ? 'Zaloguj się' : 'Zarejestruj się'}</b></p>
        </div>
     );
}
 
export default Auth;
