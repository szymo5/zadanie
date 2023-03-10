import { checkForm } from "./checkForm";
import * as api from '../api';

export const signup = async (formData, setIsError, navigate) => {
    try {
        const error = checkForm(formData);
        if(error){
            throw error;
        }

        const {data} = await api.signUp(formData);
        console.log(data);

        localStorage.setItem('user', JSON.stringify(data.user));

        navigate('/');
      

    } catch (error) {
        if(error?.response?.data){
            setIsError(error.response.data);
        } else {
            setIsError(error);
        }
    }
}

export const signin = async (formData, setIsError, navigate) => {
    try {
        const formDataCopy = JSON.parse(JSON.stringify(formData));
        delete formDataCopy.email;
        delete formDataCopy.confirmPassword;

        const error = checkForm(formDataCopy);
        if(error){
            throw error;
        }

        const {data} = await api.signIn(formData);
        console.log(data.user);

        localStorage.setItem('user', JSON.stringify(data.user));

        navigate('/');
      

    } catch (error) {
        if(error?.response?.data){
            setIsError(error.response.data);
        } else {
            setIsError(error);
        }
    }
}