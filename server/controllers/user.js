//import { user } from "../data.js"
import {randomBytes} from 'crypto';
import validator from 'validator'
import {writeFile, readFile} from 'fs/promises';

export const signup = async (req, res) => {
    try {
        const {username, email, password, confirmPassword} = req.body;

        const data = await readFile("./database/users.json");
        const users = JSON.parse(data);

        const isEmail = validator.isEmail(email);
        if(!isEmail) return res.status(400).json({errorType: 'email', error: true, errorMsg: 'Podano nieprawidłowy email'})

        if(password !== confirmPassword) return res.status(400).json({errorType: 'password', error: true, errorMsg: 'Podane hasła różnią się'});

        const existingUsername = users.find((u) => u.username === username);
        if(existingUsername) return res.status(400).json({errorType: 'username', error: true, errorMsg: 'Użytkownik o podanej nazwie już istnieje'})

        const existingEmail = users.find((u) => u.email === email);
        if(existingEmail) return res.status(400).json({errorType: 'email', error: true, errorMsg: 'Użytkownik o podanym email już istnieje'})

        const userId = randomBytes(4).toString('hex');
        const newUser = {id: userId, username, email, password, root: false};

        users.push(newUser);

        //user.push(newUser);

        await writeFile("./database/users.json", JSON.stringify(users));

        res.status(201).json({user: newUser});

    } catch (error) {
        console.log(error);
    }
    
}

export const signin = async (req, res) => {
    try {
        const {username, password} = req.body;

        const data = await readFile("./database/users.json");
        
        const users = JSON.parse(data);
        console.log(users)

        const isUser = users.find((u) => u.username === username);
        if(!isUser) return res.status(400).json({errorType: 'username', error: true, errorMsg: 'Użytkownik o podanej nazwie nie istnieje'})

        if(isUser.password !== password) return res.status(400).json({errorType: 'password', error: true, errorMsg: 'Nieprawidłowe hasło'})

        res.status(200).json({user: isUser});
        
    } catch (error) {
        console.log(error);
    }
    
}