import { user } from "../data.js"
import {randomBytes} from 'crypto';
import validator from 'validator'

export const signup = (req, res) => {
    const {username, email, password, confirmPassword} = req.body;

    const isEmail = validator.isEmail(email);
    if(!isEmail) return res.status(400).json({errorType: 'email', error: true, errorMsg: 'Podano nieprawidłowy email'})

    if(password !== confirmPassword) return res.status(400).json({errorType: 'password', error: true, errorMsg: 'Podane hasła różnią się'});

    const existingUsername = user.find((u) => u.username === username);
    if(existingUsername) return res.status(400).json({errorType: 'username', error: true, errorMsg: 'Użytkownik o podanej nazwie już istnieje'})

    const existingEmail = user.find((u) => u.email === email);
    if(existingEmail) return res.status(400).json({errorType: 'email', error: true, errorMsg: 'Użytkownik o podanym email już istnieje'})

    const userId = randomBytes(4).toString('hex');
    const newUser = {id: userId, username, email, password, root: false};

    user.push(newUser);

    res.status(201).json({user: newUser});
}

export const signin = (req, res) => {
    const {username, password} = req.body;

    const isUser = user.find((u) => u.username === username);
    if(!isUser) return res.status(400).json({errorType: 'username', error: true, errorMsg: 'Użytkownik o podanej nazwie nie istnieje'})

    if(isUser.password !== password) return res.status(400).json({errorType: 'password', error: true, errorMsg: 'Nieprawidłowe hasło'})

    res.status(200).json({user: isUser});
}